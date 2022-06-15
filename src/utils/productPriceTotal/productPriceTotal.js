const productPriceTotal = (product) => {
  const price = product.price;
  const quantity = product.quantity;
  const priceColor = product.color && product.color.price;

  return (priceColor + price) * quantity;
};

export default productPriceTotal;
