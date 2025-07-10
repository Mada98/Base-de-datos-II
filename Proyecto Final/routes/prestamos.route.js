const express = require('express')
const router = express.Router()
const {getAllPrestamos, prestarLibro, devolverLibro} = require('../controllers/prestamos.controller')
const { prestamosSchema } = require('../schemas/prestamos.schema')
const { validate } = require('../middleware/validate')

router.get('/', getAllPrestamos) // http://localhost:3000/prestamos
router.post('/', validate(prestamosSchema.prestar),prestarLibro) // http://localhost:3000/prestamos
router.post('/devolver', validate(prestamosSchema.devolver),devolverLibro) // http://localhost:3000/prestamos/devolver

module.exports = router