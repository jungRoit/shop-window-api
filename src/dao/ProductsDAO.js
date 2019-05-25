const products = [
  {
    product_id: '1',
    name: "Levi's jeans",
    category: 'clothes',
    sub_category: 'jeans',
    color: 'blue'
  },
  {
    product_id: '2',
    name: 'Polo T-shirt',
    category: 'clothes',
    sub_category: 't-shirt',
    color: 'white'
  }
];

const getAllProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(products), 500);
  });
};

const getProductById = id => {
  let product = {};
  for (let i = 0; i < products.length; i++) {
    if (products[i].product_id === id) {
      product = products[i];
    }
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(product), 500);
  });
};

export { getAllProducts, getProductById };
