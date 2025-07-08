const Libros = require('../models/libros');

const getAllLibros = async (req, res) => {
    try{
        const libros = await Libros.find();
        res.status(200).json(libros);
    }catch (error){
        res.status(400).json({error: 'Error al obtener los datos de los libros'})
    }
}

//1era funcion agregarLibro(libro) - FUNCION HECHA Y CHEQUEADA
const agregarLibro = async (req, res) => {
    try{
        const nuevoLibro = new Libros(req.body);
        await nuevoLibro.save();
        res.status(201).json(nuevoLibro);
    }catch (error){
        res.status(400).json({error: 'Error al crear el libro'})
    }
}

//4ta funcion buscar libros por criterio, buscarLibros(criterio) - Implementado (revisar y ajustar si es necesario)
const buscarLibros = async (req, res) => {
    try {
        const criterio = req.query.criterio;

        // Buscar libros que coincidan parcialmente en título, autor o género
        const libros = await Libros.find({
            $or: [
                { titulo: { $regex: criterio, $options: 'i' } },
                { autor: { $regex: criterio, $options: 'i' } },
                { genero: { $regex: criterio, $options: 'i' } }
            ]
        });

        res.status(200).json(libros);
    } catch (error) {
        res.status(500).json({ error: 'Error al buscar los libros' });
    }
}

//5ta funcion reporte populares, reportePopulares() - Implementado (revisar y ajustar si es necesario)
const reportePopulares = async (req, res) => {
    try {
        // Obtener los 5 libros más populares, ordenados por cantidad de préstamos
        const librosPopulares = await Libros.find().sort({ cantidadPrestamos: -1 }).limit(5);

        res.status(200).json(librosPopulares);
    } catch (error) {
        res.status(500).json({ error: 'Error al generar el reporte de libros populares' });
    }
}
module.exports = { getAllLibros, agregarLibro, buscarLibros, reportePopulares };