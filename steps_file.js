/* eslint-disable no-undef */
const backdoorBaseUrl = 'http://localhost:8000/backdoor';

module.exports = () => actor({
  // 홈페이지
  seeHomePageWithProduct() {
    this.see('인기 선물을 한자리에 모았어요');
  },
  seeHomePageWithoutProduct() {
    this.see('상품이 존재하지 않습니다');
  },

  // 헤더
  seeDefaultHeader() {
    this.see('선물하기');
    this.see('홈');
    this.see('스토어');
    this.see('주문조회');
  },
  seeLoginHeader() {
    this.seeDefaultHeader();
    this.see('로그인');
    this.see('회원가입');
  },
  seeLogoutHeader() {
    this.seeDefaultHeader();
    this.see('로그아웃');
    this.see('내 잔액:');
  },

  // 회원가입 페이지
  seeSignupPage() {
    this.see('SIGN UP');
    this.see('이름 :');
    this.see('3-7자까지 한글만 사용 가능');
    this.see('아이디 :');
    this.see('영문소문자/숫자, 4~16자만 사용 가능');
    this.see('비밀번호 :');
    this.see('8글자 이상의 영문(대소문자), 숫자, 특수문자가 모두 포함되어야 함');
    this.see('비밀번호 확인 :');
    this.see('회원가입');
  },

  fillSignupFields({
    name, identification, password, confirmPassword,
  }) {
    this.fillField('이름 :', name);
    this.fillField('아이디 :', identification);
    this.fillField('비밀번호 :', password);
    this.fillField('비밀번호 확인 :', confirmPassword);
  },

  seeSignupSuccessPage() {
    this.see('회원가입 완료');
    this.see('마카오 선물하기 회원가입이 완료되었습니다.');
    this.see('정상적인 서비스 이용을 위해 로그인을 진행해주세요.');
    this.see('로그인하기');
  },

  // 로그인 페이지
  seeLoginPage() {
    this.see('USER LOGIN');
    this.see('아이디');
    this.see('비밀번호');
    this.see('로그인하기');
    this.see('회원가입');
  },

  // 상품 주문 페이지
  seeOrderFields() {
    this.see('받는 분 성함*');
    this.see('받는 분 주소*');
    this.see('받는 분께 보내는 메세지');
    this.seeElement('button[type="submit"]');
  },

  fillOrderFields({
    receiver, address, messageToSend,
  }) {
    this.fillField('받는 분 성함*', receiver);
    this.fillField('받는 분 주소*', address);
    this.fillField('받는 분께 보내는 메세지', messageToSend);
  },

  // 주문 목록 페이지
  seeOrdersPage() {
    this.see(/내가 주문한 내역/);
  },

  // 주문 세부정보 페이지
  seeOrderDetailPage() {
    this.see('구매수량');
    this.see('총 상품금액');
    this.see('구매일');
    this.see('받는 분');
    this.see('받는 분 주소');
    this.see('받는 분께 보내는 메세지');
  },

  // BackDoor
  setupDatabase() {
    this.amOnPage(`${backdoorBaseUrl}/setup-database`);
  },
});
