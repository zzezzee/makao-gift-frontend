Feature('주문 목록 화면');

Scenario('로그인을 안한 채로 주문 목록 화면을 누를 때', ({ I }) => {
  // When
  I.click('주문조회');

  // Then
  I.seeOrdersFields();
});

Scenario('주문 목록이 있는 경우', ({ I }) => {
  // Given
  I.login();
  I.order();

  // When
  I.click('주문조회');

  // Then
  I.see('내가 주문한 내역입니다');
});

Scenario('주문 목록이 없는 경우', ({ I }) => {
  // Given
  // 로그인

  // When
  I.amOnPage('/orders');

  // Then
  I.see('내가 주문한 내역이 없습니다');
});
