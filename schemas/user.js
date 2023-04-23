const Joi = require('joi-oid')

const schema = Joi.object({
    nick: Joi.string()
        .min(3)
        .max(30)
        .required()
        .messages({
            'string.min': 'NOMBRE: min 3 letras',
            'string.max': 'NOMBRE: max 30 letras',
            'any.required': 'NOMBRE: obligatorio',
            'string.empty': 'NOMBRE: obligatorio',
        }),
        password: Joi.string()
        .min(5)
        .max(20)
        .required()
        .messages({
            'string.min': 'CONTRASEÑA: min 8 l3tr45',
            'string.max': 'CONTRASEÑA: max 20 l3tr45',
            'any.required': 'CONTRASEÑA: obligatoria',
            'string.empty': 'CONTRASEÑA: obligatoria',
        }),
        photo: Joi.string().min(5).required().messages({
            'any.required': 'FOTO: tal vez no cargó! vuelva a intentar!',
            'string.empty': 'FOTO: tal vez no cargó! vuelva a intentar!'
        }),
        admin: Joi.boolean().required(),
        online: Joi.boolean().required()
})

module.exports = schema