const express = require('express')
const router = express.Router()
const {getAllPrestamos, prestarLibro, devolverLibro} = require('../controllers/prestamos.controller')

router.get('/', getAllPrestamos)
router.post('/', prestarLibro)
router.post('/dev', devolverLibro)

module.exports = router