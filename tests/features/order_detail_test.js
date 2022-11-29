Feature('주문 세부 정보 확인 화면');

Scenario('주문 세부정보 확인', ({ I }) => {
  // Given
  // 주문 정보 한개 준비

  // When
  I.amOnPage('/orders/1');

  // Then
  I.seeOrderDetailPage();
});
