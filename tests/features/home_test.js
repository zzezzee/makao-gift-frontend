Feature('홈페이지');

Scenario('로그인되어있는 경우', ({ I }) => {
  // Given
  I.setupDatabase();
  I.login();

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
