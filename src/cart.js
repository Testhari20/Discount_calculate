function calculateDiscount(price, coupon) {
  if (coupon === 'SAVE10') {
    return Math.round(price * 0.9 * 100) / 100;
  }
  return price;
}

function cartTotal(prices, coupon) {
  return calculateDiscount(prices.reduce((a, b) => a + b, 0), coupon);
}

module.exports = { calculateDiscount, cartTotal };
