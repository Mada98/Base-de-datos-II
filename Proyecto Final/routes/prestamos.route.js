const express = require('express')
const router = express.Router()
const {getAllPrestamos, prestarLibro, devolverLibro} = require('../controllers/prestamos.controller')

router.get('/', getAllPrestamos) // http://localhost:3000/prestamos
router.post('/', prestarLibro) // http://localhost:3000/prestamos
router.post('/devolver', devolverLibro) // http://localhost:3000/prestamos/devolver

module.exports = router