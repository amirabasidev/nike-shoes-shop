const filterProducts = (products, { search, categories, price }) => {
  if (categories.length > 0) {
    products = products.filter((product) =>
      categories.some((categoryId) => categoryId === product.category.id),
    );
  }

  if (search !== "") {
    products = products.filter((product) =>
      product.name.toLowerCase().trim().includes(search.toLowerCase().trim()),
    );
  }

  if (price[1] !== 0) {
    products = products.filter(
      (product) => product.price >= price[0] && product.price <= price[1],
    );
  }

  return products;
};

export default filterProducts;
