import { Router } from 'express';

import ProductController from './controllers/ProductController';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Shop Window API'
  });
});

router.use('/products', ProductController);

export default router;
