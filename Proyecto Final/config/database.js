const mongoose = require('mongoose')

const uri = 'mongodb://localhost:27017/Biblioteca';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ Conectado a MongoDB'))
.catch(() => console.log('❌ Error al conectar a MongoDB:', error))

module.exports = mongoose