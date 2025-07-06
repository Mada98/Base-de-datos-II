const Libros = require('../models/libros');

const getAllLibros = async (req, res) => {
    try{
        const libros = await Libros.find();
        res.status(200).json(libros);
    }catch (error){
        res.status(400).json({error: 'Error al obtener los datos de los libros'})
    }
}

//1era funcion agregarLibro(libro) - HECHA
const agregarLibro = async (req, res) => {
    try{
        const nuevoLibro = new Libros(req.body);
        await nuevoLibro.save();
        res.status(201).json(nuevoLibro);
    }catch (error){
        res.status(400).json({error: 'Error al crear el libro'})
    }
}

//4ta funcion buscar libros por criterio, buscarLibros(criterio) - FALTA IMPLEMENTAR

//5ta funcion reporte populares, reportePopulares() - FALTA IMPLEMENTAR
module.exports = { getAllLibros, agregarLibro }