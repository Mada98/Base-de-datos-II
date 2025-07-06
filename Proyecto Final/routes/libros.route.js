const express = require('express')
const router = express.Router()
const {getAllLibros, agregarLibro} = require('../controllers/libros.controller')

router.get('/', getAllLibros)
router.post('/', agregarLibro)

module.exports = router