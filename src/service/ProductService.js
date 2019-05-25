import * as ProductDAO from '../dao/ProductsDAO';

const getAllProductsService = () => {
  return ProductDAO.getAllProducts();
};

const getProductByIdService = id => {
  return ProductDAO.getProductById(id);
};

export { getAllProductsService, getProductByIdService };
