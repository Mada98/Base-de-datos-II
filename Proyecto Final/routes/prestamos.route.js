const express = require('express')
const router = express.Router()
const {getAllPrestamos, prestarLibro} = require('../controllers/prestamos.controller')

router.get('/', getAllPrestamos)
router.post('/', prestarLibro)

module.exports = router