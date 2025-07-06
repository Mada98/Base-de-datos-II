const Prestamos = require('../models/prestamos')

const getAllPrestamos = async (req, res) => {
    try {
        const prestamos = await Prestamos.find();
        res.status(200).json(prestamos);
    } catch (error) {
        res.status(400).json({ error: 'Error al obtener los datos de los prestamos' })
    }
}

//2nd funcion prestarLibro(isbn, usuario) - FALTA IMPLMENTAR DE MANERA MAS DETALLADA
const prestarLibro = async (req, res) => {
    try {
        const nuevoPrestamo = new Prestamos(req.body);
        await nuevoPrestamo.save();
        res.status(201).json(nuevoPrestamo);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear un prestamo' });
    }
}

//3era funcion devolverLibro(prestamoId) - FALTA IMPLEMENTAR

module.exports = { getAllPrestamos, prestarLibro }