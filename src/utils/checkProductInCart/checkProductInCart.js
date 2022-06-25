const checkProductInCart = (productId, cart) => {
  const findProduct = cart.some((productCart) => productCart.id === productId);

  return findProduct;
};

export default checkProductInCart;
