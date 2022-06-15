const cartPriceTotal = (products) => {
  const priceTotal = products.reduce(
    (totalPrice, product) => totalPrice + product.priceTotal,
    0,
  );
  
  return priceTotal;
};

export default cartPriceTotal;
