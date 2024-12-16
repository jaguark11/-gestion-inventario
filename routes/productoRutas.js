const express = require('express');
const router = express.Router();
const Producto = require('../models/Producto');

// Crear un producto (POST)
router.post('/', async (req, res) => {
  try {
    const producto = new Producto(req.body);
    await producto.save();
    res.status(201).json({ message: 'Producto creado', producto });
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el producto', detalle: error.message });
  }
});

// Leer todos los productos (GET)
router.get('/', async (req, res) => {
  try {
    const productos = await Producto.find();
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los productos', detalle: error.message });
  }
});

// Leer un producto por ID (GET /:id)
router.get('/:id', async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });
    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el producto', detalle: error.message });
  }
});

// Actualizar un producto por ID (PUT /:id)
router.put('/:id', async (req, res) => {
  try {
    const productoActualizado = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!productoActualizado) return res.status(404).json({ error: 'Producto no encontrado' });
    res.status(200).json({ message: 'Producto actualizado', producto: productoActualizado });
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar el producto', detalle: error.message });
  }
});

// Eliminar un producto por ID (DELETE /:id)
router.delete('/:id', async (req, res) => {
  try {
    const productoEliminado = await Producto.findByIdAndDelete(req.params.id);
    if (!productoEliminado) return res.status(404).json({ error: 'Producto no encontrado' });
    res.status(200).json({ message: 'Producto eliminado', producto: productoEliminado });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el producto', detalle: error.message });
  }
});

module.exports = router;
