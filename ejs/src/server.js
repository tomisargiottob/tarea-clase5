const express = require('express');
const config = require('config');

const app = express();
const { productos, productosRouter } = require('./productos');

// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = config.app.port || 8080;
const data = productos;

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('pages/productos', { data });
});
app.get('/form', (req, res) => {
  res.render('pages/formulario', { data });
});
app.use('/productos', productosRouter);
app.use(express.static('public'));

const server = app.listen(PORT, () => {
  console.log(`Server up and listening on http://localhost:${PORT}`);
});

server.on('error', (err) => {
  console.log(err);
});
