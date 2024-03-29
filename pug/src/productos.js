const { Router } = require('express');

const productosRouter = new Router();
const productos = [];

productosRouter.get('', (req, res) => {
  res.status(200).send(productos);
});

productosRouter.post('', (req, res) => {
  const product = req.body;
  product.id = Math.max(...productos.map((producto) => producto.id)) + 1;
  if (product.id < 0) {
    product.id = 0;
  }
  productos.push(product);
  res.redirect('/');
});

module.exports = { productos, productosRouter };
