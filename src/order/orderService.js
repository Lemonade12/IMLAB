const orderRepo = require("./orderRepository");
const couponRepo = require("../coupon/couponRepository");
const axios = require("axios");

async function createOrder(orderInfo) {
  const productId = orderInfo.product_id;
  const countryId = orderInfo.country_idx;
  const productInfo = await orderRepo.readProductById(productId);
  if (!productInfo) {
    const error = new Error("존재하지 않는 상품입니다.");
    error.statusCode = 404;
    throw error;
  }
  const countryInfo = await orderRepo.readCountryById(countryId);
  if (!countryInfo) {
    const error = new Error("존재하지 않는 나라입니다.");
    error.statusCode = 404;
    throw error;
  }
  let totalPrice;
  let discountedAmount;
  let exchangeInfo;

  const url_for_exchange = "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD";
  await axios.get(url_for_exchange).then(function (response) {
    //환율api적용
    exchangeInfo = response.data[0].basePrice;
  });
  const deliveryCost = await orderRepo.readDeliveryCost(
    orderInfo.quantity,
    countryInfo.country_name
  );
  if (orderInfo.coupon_code == undefined) {
    //쿠폰미사용
    totalPrice = productInfo.price * orderInfo.quantity + deliveryCost[0];
  } else {
    //쿠폰사용
    const couponCode = orderInfo.coupon_code;
    const couponInfo = await couponRepo.readCouponByCode(couponCode);
    if (!couponInfo) {
      const error = new Error("존재하지 않는 쿠폰입니다.");
      error.statusCode = 404;
      throw error;
    }
    if (couponInfo.type == "percent") {
      totalPrice =
        (productInfo.price * orderInfo.quantity * (100 - couponInfo.discount)) / 100 +
        deliveryCost[0];
      discountedAmount = (productInfo.price * orderInfo.quantity * couponInfo.discount) / 100;
    } else if (couponInfo.type == "fixed") {
      totalPrice = productInfo.price * orderInfo.quantity - couponInfo.discount + deliveryCost[0];
      discountedAmount = couponInfo.discount;
    } else if (couponInfo.type == "delivery") {
      totalPrice = productInfo.price * orderInfo.quantity + deliveryCost[0] - couponInfo.discount;
      discountedAmount = couponInfo.discount;
    }
  }
  console.log(countryInfo);
  if (countryInfo.country_code !== "KR") {
    totalPrice = totalPrice / exchangeInfo;
  }

  const orderInfoDTO = {
    user_name: orderInfo.user_name,
    pay_state: "주문완료",
    product_id: orderInfo.product_id,
    quantity: orderInfo.quantity,
    total_price: totalPrice,
    country_idx: orderInfo.country_idx,
    buyr_city: orderInfo.buyr_city,
    buyr_zipx: orderInfo.buyr_zipx,
  };

  const data = await orderRepo.createOrder(orderInfoDTO);

  if (orderInfo.coupon_code !== undefined) {
    //쿠폰사용인경우 coupon_usage 테이블에 create
    const couponCode = orderInfo.coupon_code;
    const couponInfo = await couponRepo.readCouponByCode(couponCode);
    const couponUsageInfoDTO = {
      coupon_id: couponInfo.id,
      order_id: data.id,
      discounted_amount: discountedAmount,
    };
    couponRepo.createCouponUsage(couponUsageInfoDTO);
  }

  return data;
}

async function readOrder(filter) {
  let statusArr = [];
  if (filter.status == undefined) {
    statusArr = ["주문완료", "배송중", "배송완료"];
  } else {
    statusArr.push(filter.status);
  }
  filter.status = statusArr;
  if (filter.start == undefined || filter.end == undefined) {
    // default 값 그 주 의 데이터만
    const curr = new Date();
    filter.start = new Date(curr.setHours(0, 0, 0, 0) - 24 * 3600 * 1000 * curr.getDay());
    filter.end = new Date(curr.setHours(24, 0, 0, 0));
  } else {
    let temp = new Date(filter.end);
    filter.end = new Date(temp.setHours(24, 0, 0, 0));
  }
  const data = await orderRepo.readOrderByFilter(filter);
  return data;
}

async function updateOrderStatus(orderId, payState) {
  const orderInfo = await orderRepo.readOrderById(orderId);
  if (!orderInfo) {
    const error = new Error("존재하지 않는 주문입니다.");
    error.statusCode = 404;
    throw error;
  }
  const data = await orderRepo.updateOrderStatus(orderId, payState);
  return data;
}

module.exports = {
  createOrder,
  readOrder,
  updateOrderStatus,
};
