# IMLAB

제품 쇼핑몰 관리 서비스
<br><br>

## 📌 서비스 개요

- 본 서비스는 제품 쇼핑몰 관리 서비스 입니다.

## 📌 요구사항 분석 및 구현



### 1. 제품주문내역 CREATE
- 주문 금액은 쿠폰 사용에 따른 사용 할인 적용이 됩니다.
- 주문 금액에는 구매국가, 구매갯수에 따른 배송비가 포함됩니다.
- 환율 API를 이용하여 환율정보를 배송비 및 주문 금액에 적용합니다.

### 2. 제품주문내역 UPDATE
- 제품의 배송 상태를 업데이트 할 수 있습니다(배송중, 배송완료) -> 주문건에 대한 발송 처리

### 3. 제품주문내역 READ
- 주문내역을 주문자 명에 대한 검색 및 주문상태, 시작일자, 종료일자에 따른 필터를 통해 열람 할 수 있습니다.

### 4. 쿠폰 CREATE
- 세가지 쿠폰 타입(배송비, %, 정액 할인)에 대한 신규 쿠폰을 발급할 수 있습니다.

### 5. 쿠폰사용내역 READ
- 발급 된 쿠폰의 사용내역을 알 수 있습니다.

### 6. 쿠폰통계 READ
- 쿠폰 타입 별 사용횟수 및 총 할인액을 알 수 있습니다.

## 📌 DB Modeling

- <img width="534" alt="디비다이어그램" src="https://user-images.githubusercontent.com/19259688/189907164-5c4ef8d2-196a-4d53-80c6-b5ce1a1f10dd.png">

<br>

## 📌 API DOCS
- [포스트맨 API DOCS](https://documenter.getpostman.com/view/21381599/2s7YYscjGk)

<br><br>

## 📌 적용 기술

- 사용언어 : Javascript
- 런타임 환경 : Node.js
- 프레임워크 : Express
- ORM : Sequelize
- 데이터베이스 : MySQL
  <br/> <br/>

## 📌 Commit Convention

- feat : 새로운 기능 추가
- fix : 버그 수정
- docs : 문서 수정
- style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우, linting
- refactor : 코드 리팩터링
- test : 테스트 코드, 리팩터링 테스트 코드 추가
- chore : 빌드 업무 수정, 패키지 매니저 수정, 그 외 자잘한 수정에 대한 커밋
