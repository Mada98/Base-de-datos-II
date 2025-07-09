const express = require('express')
const router = express.Router()
const {getAllLibros, agregarLibro, buscarLibros ,reportePopulares} = require('../controllers/libros.controller')

router.get('/', getAllLibros) // http://localhost:3000/libros
router.post('/', agregarLibro) // http://localhost:3000/libros
router.get('/crt', buscarLibros) // http://localhost:3000/libros/crt?criterio=Gabriel García Márquez // EJEMPLO
router.get('/populares', reportePopulares) // http://localhost:3000/libros/populares

module.exports = router