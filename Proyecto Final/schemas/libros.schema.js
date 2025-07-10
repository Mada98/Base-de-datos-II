const Joi = require('joi')

const librosSchema = {
    agregar: Joi.object({
        titulo: Joi.string().required(),
        autor: Joi.string().required(),
        isbn: Joi.string().required(),
        genero: Joi.string().required(),
        anioPublicacion: Joi.number().positive().integer().required(),
        copias: Joi.number().positive().integer().required(),
        disponibles: Joi.number().positive().integer().required()
    }),
}

module.exports = { librosSchema }