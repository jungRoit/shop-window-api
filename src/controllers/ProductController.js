import { Router } from 'express';

import * as ProductService from '../service/ProductService';

const ProductController = Router();

ProductController.get('/', (req, res, next) => {
  ProductService.getAllProductsService()
    .then(products => res.json({ data: products, status: 200 }))
    .catch(error => {
      res.status(500).json({
        error: error,
        message: 'Internal Server Error'
      });
    });
});

ProductController.get('/:id', (req, res, next) => {
  const id = req.params.id;
  ProductService.getProductByIdService(id)
    .then(product => {
      res.json({ data: product, status: 200 });
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: 'Internal Server Error'
      });
    });
});

export default ProductController;
