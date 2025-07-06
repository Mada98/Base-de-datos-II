const mongoose = require('../config/database');

const LibrosSchema = new mongoose.Schema({
  titulo: String,
  autor: String,
  isbn: String,
  genero: String,
  anioPublicacion: Number,
  copias: Number,
  disponibles: Number
}, {
  timestamps: true
});

module.exports = mongoose.model('Libros', LibrosSchema);