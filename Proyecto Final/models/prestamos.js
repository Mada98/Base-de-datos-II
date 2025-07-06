const mongoose = require('../config/database');
const { Schema } = mongoose

const PrestamosSchema = new mongoose.Schema({
    libroId: { 
        type: Schema.Types.ObjectId, 
        ref: 'Libros'
    },
    usuario: String,
    fechaPrestamo: Date,
    fechaDevolucion: Date,
    devuelto: Boolean
}, {
    timestamps: true
})

module.exports = mongoose.model('Prestamos', PrestamosSchema)