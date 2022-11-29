Feature('주문 목록 화면');

Scenario('주문 목록 화면', ({ I }) => {
  // When
  I.amOnPage('/orders');

  // Then
  I.seeOrderFields();
});

Scenario('주문 목록이 있는 경우', ({ I }) => {
  // Given
  // 로그인
  // 주문 목록

  // When
  I.amOnPage('/orders');

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
