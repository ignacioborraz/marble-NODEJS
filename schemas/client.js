const Joi = require('joi-oid')

const schema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .allow('')
        .messages({
            'string.min': 'NOMBRE: min 3 letras',
            'string.max': 'NOMBRE: max 30 letras'
        }),
    company: Joi.string()
        .min(3)
        .max(30)
        .allow('')
        .messages({
            'string.min': 'EMPRESA: min 3 letras',
            'string.max': 'EMPRESA: max 30 letras'
        })
})

module.exports = schema