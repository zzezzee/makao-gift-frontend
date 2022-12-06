Feature('주문 세부 정보 확인 화면');

Scenario('주문 세부정보 확인', ({ I }) => {
  // Given
  I.order();

  // When
  I.amOnPage('/orders/1');

  // Then
  I.seeOrderDetailPage();
});
