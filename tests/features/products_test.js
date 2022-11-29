Feature('상품 목록 확인 화면');

Scenario('상품이 존재하지 않는 경우', ({ I }) => {
  // Given
  // 상품 전부 삭제

  // When
  I.amOnPage('/products');

  // Then
  I.see('상품이 존재하지 않습니다');
});

Scenario('상품이 1개 존재하는 경우', ({ I }) => {
  // Given
  // 상품 1개 준비

  // When
  I.amOnPage('/products');

  // Then
  I.see('상품정보..../?');
});

Scenario('상품이 9개 존재하는 경우', ({ I }) => {
  // Given
  // 상품 9개 준비

  // When
  I.amOnPage('/products');

  // Then
  I.see('상품정보..../?');
  I.see('1...?');
  I.see('2...?');
});
