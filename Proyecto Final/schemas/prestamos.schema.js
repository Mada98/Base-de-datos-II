const Joi = require('joi')

const prestamosSchema = {
    prestar: Joi.object({
        isbn: Joi.string().required(),
        usuario: Joi.string().required()
    }),
    devolver: Joi.object({
        prestamoId: Joi.string().required()
    })
}

module.exports = { prestamosSchema }