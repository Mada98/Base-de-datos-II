const express = require('express')
const router = express.Router()
const {getAllLibros, agregarLibro, reportePopulares} = require('../controllers/libros.controller')

router.get('/', getAllLibros)
router.post('/', agregarLibro)
router.get('/populares', reportePopulares)

module.exports = router