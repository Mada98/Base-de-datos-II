const express = require('express');
const libroRouter = require('./routes/libros.route')
const prestamoRouter = require('./routes/prestamos.route')

const app = express();
app.use(express.json());

app.use('/libros', libroRouter)
app.use('/prestamos', prestamoRouter)

app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});