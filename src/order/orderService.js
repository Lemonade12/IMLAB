const orderRepo = require("./orderRepository");
const couponRepo = require("../coupon/couponRepository");
const axios = require("axios");

async function createOrder(orderInfo) {
  const productId = orderInfo.product_id;
  const countryId = orderInfo.country_idx;
  const productInfo = await orderRepo.readProductById(productId);
  const countryInfo = await orderRepo.readCountryById(countryId);
  let totalPrice;
  let discountedAmount;
  let exchangeInfo;

  const url_for_exchange = "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD";
  await axios.get(url_for_exchange).then(function (response) {
    exchangeInfo = response.data[0].basePrice;
  });

  if (countryInfo.country_name == "South Korea") {
    //배송비없음 => 조건을 바꿔야할듯
    if (orderInfo.coupon_id == undefined) {
      //쿠폰미사용
      totalPrice = productInfo.price * orderInfo.quantity;
    } else {
      //쿠폰사용
      const couponId = orderInfo.coupon_id;
      const couponInfo = await couponRepo.readCouponById(couponId);
      if (couponInfo.type == "percent") {
        totalPrice = (productInfo.price * orderInfo.quantity * (100 - couponInfo.discount)) / 100;
        discountedAmount = (productInfo.price * orderInfo.quantity * couponInfo.discount) / 100;
      } else if (couponInfo.type == "fixed") {
        totalPrice = productInfo.price * orderInfo.quantity - couponInfo.discount;
        discountedAmount = couponInfo.discount;
      }
    }
  } else {
    //배송비있음
    const deliveryCost = await orderRepo.readDeliveryCost(
      orderInfo.quantity,
      countryInfo.country_name
    );
    if (orderInfo.coupon_id == undefined) {
      //쿠폰미사용
      totalPrice = productInfo.price * orderInfo.quantity;
    } else {
      //쿠폰사용
      const couponId = orderInfo.coupon_id;
      const couponInfo = await couponRepo.readCouponById(couponId);
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
    totalPrice = totalPrice / exchangeInfo;
  }
  // 쿠폰적용해야함, kr이면 그대로, 그외의 나라에는 환율적용 1200 = 1달라, 추후 환율 api 적용

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

  if (orderInfo.coupon_id !== undefined) {
    //쿠폰사용인경우 coupon_usage 테이블에 create
    const couponUsageInfoDTO = {
      coupon_id: orderInfo.coupon_id,
      order_id: data.id,
      discounted_amount: discountedAmount,
    };
    couponRepo.createCouponUsage(couponUsageInfoDTO);
  }

  return data;
}

module.exports = {
  createOrder,
};
