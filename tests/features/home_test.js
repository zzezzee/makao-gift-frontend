Feature('홈페이지');

Scenario('로그인되어있는 경우', ({ I }) => {
  // Given
  // 로그인되어있음

  // When
  I.amOnPage('/');

  // then
  I.seeLogoutHeader();
});

Scenario('로그인되어있지 않은 경우 경우', ({ I }) => {
  // When
  I.amOnPage('/');

  // then
  I.seeLoginHeader();
});
