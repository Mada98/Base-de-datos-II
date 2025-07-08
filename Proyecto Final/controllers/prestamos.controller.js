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

//3era funcion devolverLibro(prestamoId) - Implementado (revisar y ajustar si es necesario)
const devolverLibro = async (req, res) => {
    try {
        const { prestamoId } = req.params;

        const prestamo = await Prestamos.findById(prestamoId);

        if (!prestamo) {
            return res.status(404).json({ error: 'Préstamo no encontrado' });
        }

        // Marcar como devuelto (campo booleano "devuelto")
        prestamo.devuelto = true;
        prestamo.fechaDevolucion = new Date();

        await prestamo.save();

        res.status(200).json({ mensaje: 'Libro devuelto correctamente', prestamo });
    } catch (error) {
        res.status(500).json({ error: 'Error al devolver el libro' });
    }
};


module.exports = { getAllPrestamos, prestarLibro, devolverLibro };