Feature('상품 상세정보 확인');

Scenario('상품 상세정보 화면', ({ I }) => {
  // Given
  // 상품 전부 삭제

  // When
  I.amOnPage('/product/1');

  // Then
  I.see('상품 정보들을 넣으면 될듯');
});
