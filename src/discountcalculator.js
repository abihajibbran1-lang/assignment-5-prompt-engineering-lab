function calculateDiscount(price, discountPercentage) {
  if (!Number.isFinite(price) || !Number.isFinite(discountPercentage)) {
    throw new TypeError("Price and discount must be finite numbers.");
  }

  if (price < 0) {
    throw new RangeError("Price cannot be negative.");
  }

  if (discountPercentage < 0 || discountPercentage > 100) {
    throw new RangeError("Discount must be between 0 and 100.");
  }

  const discountAmount = price * (discountPercentage / 100);

  return price - discountAmount;
}

module.exports = { calculateDiscount };
