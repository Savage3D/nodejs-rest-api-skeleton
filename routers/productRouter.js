const router = require('express').Router();
const controller = require('../controllers/productController');
const { catchMiddlewareErrors } = require('../middlewares/errorMiddleware');

// GET: '/api/product'
router.get(
  '/',
  catchMiddlewareErrors(controller.getAll),
);

// GET: 'api/product/5c9c8fad860ad42ff0697db7
router.get(
  '/:id',
  catchMiddlewareErrors(controller.getById),
);

// POST: '/api/product'
router.post(
  '/',
  catchMiddlewareErrors(controller.create),
);

// PUT: 'api/product/5c9c8fad860ad42ff0697db7
router.put(
  '/:id',
  catchMiddlewareErrors(controller.update),
);

// DELETE: 'api/product/5c9c8fad860ad42ff0697db7
router.delete(
  '/:id',
  catchMiddlewareErrors(controller.remove),
);

module.exports = router;
