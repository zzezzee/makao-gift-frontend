Feature('로그인 화면');

Before(({ I }) => {
  I.setupDatabase();
});

Scenario('로그인 화면', ({ I }) => {
  // When
  I.amOnPage('/login');

  // Then
  I.seeLoginPage();
});

Scenario('정상적으로 로그인', ({ I }) => {
  // When
  I.login({
    username: 'test',
    password: 'test',
  });

  // Then
  // I.seeLogoutHeader();
  I.seeHomePage();
});

Scenario('정보를 입력하지 않고 로그인', ({ I }) => {
  // When
  I.login({ username: '', password: '' });

  // Then
  I.see('아이디를 입력해주세요');
});

Scenario('아이디를 입력하지 않고 로그인', ({ I }) => {
  // When
  I.login({ username: '', password: 'test' });

  // Then
  I.see('아이디를 입력해주세요');
});

Scenario('비밀번호를 입력하지 않고 로그인', ({ I }) => {
  // When
  I.login({ username: 'test', password: '' });

  // Then
  I.see('비밀번호를 입력해주세요');
});

Scenario('등록되지 않은 아이디 혹은 일치하지 않는 비밀번호를 입력해 로그인 시도', ({ I }) => {
  // When
  I.login({ username: 'xxx', password: 'Password123!' });

  // Then
  I.see('아이디 혹은 비밀번호가 맞지 않습니다');

  // When
  I.login({ username: 'zzezze', password: 'aasdf' });

  // Then
  I.see('아이디 혹은 비밀번호가 맞지 않습니다');
});
