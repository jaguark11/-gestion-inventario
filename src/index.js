const express = require('express');
const mongoose = require('mongoose');
const productoRutas = require('../routes/productoRutas'); // Importa las rutas

const app = express();
app.use(express.json()); // Middleware para parsear JSON

mongoose.connect('mongodb://127.0.0.1:27017/inventario')
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

app.use('/api/productos', productoRutas); // Usa las rutas en la ruta base '/api/productos'

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
