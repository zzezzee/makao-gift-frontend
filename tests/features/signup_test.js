Feature('회원가입 화면');

Scenario('회원가입 화면 UI', ({ I }) => {
  // When
  I.amOnPage('/signup');

  // Then
  I.seeSignupPage();
});

Scenario('올바른 정보로 회원가입', ({ I }) => {
  // Given
  // 등록된 계좌 지우기'
  I.amOnPage('/signup');

  // When
  I.fillSignupFields({
    name: '여긴이름이다',
    username: 'zzezze',
    password: 'Password123!',
    confirmPassword: 'Password123!',
  });

  I.click('button[type="submit"]');

  // then
  I.seeSignupSuccessPage();
});

Scenario('이름을 입력하지 않고 회원가입', ({ I }) => {
  // Given
  I.amOnPage('/signup');

  // When
  I.fillSignupFields({
    name: '',
    username: 'zzezze',
    password: 'Password123!',
    confirmPassword: 'Password123!',
  });

  I.click('button[type="submit"]');

  // then
  I.see('이름을 입력해주세요');
});

Scenario('양식에 안맞는 이름으로 회원가입', ({ I }) => {
  // Given
  // 등록된 계좌 지우기'
  I.amOnPage('/signup');

  // When
  I.fillSignupFields({
    name: '이름',
    username: 'zzezze',
    password: 'Password123!',
    confirmPassword: 'Password123!',
  });

  I.click('button[type="submit"]');

  // then
  I.see('이름을 다시 확인해주세요');
});

Scenario('양식에 안맞는 아이디로 회원가입', ({ I }) => {
  // Given
  // 등록된 계좌 지우기'
  I.amOnPage('/signup');

  // When
  I.fillSignupFields({
    name: '이건이름이다',
    username: '한글이지롱',
    password: 'Password123!',
    confirmPassword: 'Password123!',
  });

  I.click('button[type="submit"]');

  // then
  I.see('아이디를 다시 확인해주세요');
});

Scenario('중복된 아이디로 회원가입', ({ I }) => {
  // Given
  I.setupDatabase();
  I.amOnPage('/signup');

  // When
  I.fillSignupFields({
    name: '이건이름이다',
    username: 'test',
    password: 'Password123!',
    confirmPassword: 'Password123!',
  });

  I.click('button[type="submit"]');

  // then
  I.see('해당 아이디는 사용할 수 없습니다');
});

Scenario('아이디를 입력하지 않고 회원가입', ({ I }) => {
  // Given
  // 등록된 계좌 지우기'
  I.amOnPage('/signup');

  // When
  I.fillSignupFields({
    name: '안녕하세요',
    username: '',
    password: 'Password123!',
    confirmPassword: 'Password123!',
  });

  I.click('button[type="submit"]');

  // then
  I.see('아이디를 입력해주세요');
});

Scenario('비밀번호를 입력하지 않고 회원가입', ({ I }) => {
  // Given
  // 등록된 계좌 지우기'
  I.amOnPage('/signup');

  // When
  I.fillSignupFields({
    name: '안녕하세요',
    username: 'zzezze',
    password: '',
    confirmPassword: 'Password123!',
  });

  I.click('button[type="submit"]');

  // then
  I.see('비밀번호를 입력해주세요');
});

Scenario('비밀번호와 비밀번호 확인이 다른 경우', ({ I }) => {
  // Given
  // 등록된 계좌 지우기'
  I.amOnPage('/signup');

  // When
  I.fillSignupFields({
    name: '안녕하세요',
    username: 'zzezze',
    password: 'Password123!',
    confirmPassword: 'Password',
  });

  I.click('button[type="submit"]');

  // then
  I.see('비밀번호가 일치하지 않습니다');
});

Scenario('비밀번호 확인을 입력하지 않고 회원가입', ({ I }) => {
  // Given
  // 등록된 계좌 지우기'
  I.amOnPage('/signup');

  // When
  I.fillSignupFields({
    name: '안녕하세요',
    username: 'zzezze',
    password: 'Password123!',
    confirmPassword: '',
  });

  I.click('button[type="submit"]');

  // then
  I.see('비밀번호를 입력해주세요');
});
