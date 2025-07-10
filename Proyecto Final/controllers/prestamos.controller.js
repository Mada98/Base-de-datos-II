const Prestamos = require('../models/prestamos')
const Libros = require('../models/libros')

const getAllPrestamos = async (req, res) => {
    try {
        const prestamos = await Prestamos.find();
        res.status(200).json(prestamos);
    } catch (error) {
        res.status(400).json({ error: 'Error al obtener los datos de los prestamos' })
    }
}

//2nd funcion prestarLibro(isbn, usuario) - FUNCION HECHA Y CHEQUEADA
const prestarLibro = async (req, res) => {
    try {
        const { isbn, usuario } = req.body
        const libro = await Libros.findOne({ isbn: isbn })

        if(!libro) {
            return res.status(404).json({error: 'ISBN no pertenece a ningun libro'})
        }

        if(libro.disponibles < 1){
            return res.status(404).json({error: 'El libro que quiere prestar no tiene copias disponibles'})
        }

        fechaAct = new Date()

        fechaDev = new Date()
        fechaDev.setDate(fechaDev.getDate() + 30)

        const nuevoPrestamo = new Prestamos({
            libroId: libro._id,
            usuario: usuario,
            fechaPrestamo: fechaAct,
            fechaDevolucion: fechaDev,
            devuelto: false
        })

        dispo = libro.disponibles
        libro.disponibles = dispo - 1

        cant = libro.cantidadPrestamos
        libro.cantidadPrestamos = cant + 1

        await libro.save()
        await nuevoPrestamo.save()
        res.status(201).json({ mensaje: 'Prestamo realizado correctamente', nuevoPrestamo});
    } catch (error) {
        res.status(500).json({ error: 'Error al crear un prestamo' });
    }
}

//3era funcion devolverLibro(prestamoId) - FUNCION HECHA Y CHEQUEADA
const devolverLibro = async (req, res) => {
    try {
        const { prestamoId } = req.body;

        const prestamo = await Prestamos.findById(prestamoId);
        const libro = await Libros.findById(prestamo.libroId)

        if (!prestamo) {
            return res.status(404).json({ error: 'Préstamo no encontrado' });
        }

        if(prestamo.devuelto == true){
            return res.status(400).json({ error: 'El libro ya se devolvio a la biblioteca' });
        }

        // Marcar como devuelto (campo booleano "devuelto")
        prestamo.devuelto = true;
        prestamo.fechaDevolucion = new Date();

        dispo = libro.disponibles
        libro.disponibles = dispo + 1

        await prestamo.save();
        await libro.save()

        res.status(200).json({ mensaje: 'Libro devuelto correctamente', prestamo });
    } catch (error) {
        res.status(500).json({ error: 'Error al devolver el libro' });
    }
};


module.exports = { getAllPrestamos, prestarLibro, devolverLibro };