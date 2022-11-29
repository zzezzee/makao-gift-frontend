Feature('상품 주문 화면');

Scenario('상품 주문 화면', ({ I }) => {
  // When
  I.amOnPage('/order');

  // Then
  I.seeOrderFields();
});

Scenario('상품 주문을 성공한 경우', ({ I }) => {
  // Given
  // 로그인되어있어야 함
  // 상품금액보다 많은 잔액

  // When
  I.amOnPage('/order');

  I.fillOrderFields({
    receiver: '홍길동',
    address: '서울시우리집',
    message: '선물이다',
  });

  I.click('button[type="submit"]');

  // Then
  I.amOnPage('/orders');
  // 주문을 볼 수 있음
});

Scenario('구매수량을 조절하는 경우', ({ I }) => {
  // When 1
  I.amOnPage('/products/1');

  // 이건 찾아봐야 할듯
});

Scenario('로그인이 되어있지 않은 상태에서 선물하기 클릭', ({ I }) => {
  // Given
  // 로그인이 안된 상태

  // When
  I.amOnPage('/order');

  I.fillOrderFields({
    receiver: '홍길동',
    address: '서울시우리집',
    message: '선물이다',
  });

  I.click('button[type="submit"]');

  // Then
  I.seeLoginPage();
});

Scenario('로그인 + 잔액부족 -> 선물하기 클릭', ({ I }) => {
  // Given
  // 로그인 + 부족한 잔액

  // When
  I.amOnPage('/order');

  I.fillOrderFields({
    receiver: '홍길동',
    address: '서울시우리집',
    message: '선물이다',
  });

  I.click('button[type="submit"]');

  // Then
  I.see('X잔액이 부족하여 선물하기가 불가합니다X');
});
