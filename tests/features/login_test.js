Feature('로그인 화면');

Scenario('로그인 화면', ({ I }) => {
  // When
  I.amOnPage('/login');

  // Then
  I.seeLoginPage();
});

Scenario('정상적으로 로그인', ({ I }) => {
  // Given
  // 회원가입된 계정 준비

  // When
  I.login({
    identification: 'zzezzee',
    password: 'Password!',
  });

  // Then
  I.seeHeaderWhenLoggedIn();
  I.seeHomePage();
});

Scenario('정보를 입력하지 않고 로그인', ({ I }) => {
  // When
  I.login({ identification: '', password: '' });

  // Then
  I.see('아이디를 입력해주세요');
});

Scenario('아이디를 입력하지 않고 로그인', ({ I }) => {
  // When
  I.login({ identification: '', password: 'Password123!' });

  // Then
  I.see('아이디를 입력해주세요');
});

Scenario('비밀번호를 입력하지 않고 로그인', ({ I }) => {
  // When
  I.login({ identification: 'zzezze', password: '' });

  // Then
  I.see('비밀번호를 입력해주세요');
});

Scenario('등록되지 않은 아이디 혹은 일치하지 않는 비밀번호를 입력해 로그인 시도', ({ I }) => {
  // When
  I.login({ identification: 'asdf', password: 'Password123!' });

  // Then
  I.see('아이디 혹은 비밀번호가 맞지 않습니다');

  // When
  I.login({ identification: 'zzezze', password: 'aasdf' });

  // Then
  I.see('아이디 혹은 비밀번호가 맞지 않습니다');
});
