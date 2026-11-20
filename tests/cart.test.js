const { calculateDiscount, cartTotal } = require('../src/cart');

describe('cart', () => {
  test('coupon reduces price', () => {
    expect(calculateDiscount(100, 'SAVE10')).toBe(90);
  });

  test('unknown coupon keeps price', () => {
    expect(calculateDiscount(100, 'NOPE')).toBe(100);
  });

  test('cart total applies coupon', () => {
    expect(cartTotal([60, 40], 'SAVE10')).toBe(90);
  });
});
