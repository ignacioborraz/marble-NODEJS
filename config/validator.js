const joi = require('joi')

const validator = (req, res, next) => {
    //console.log("req.body es")
    //console.log(req.body)
    const schema = joi.object({
        nick: joi.string()
            .min(6)
            .trim()
            .pattern(new RegExp('[a-zA-Z0-9]'))
            .required()
            .messages({'string.min': 'name: min 6 characters'}),
        photo: joi.string()
            .min(10)
            .trim()
            .required(),
        password: joi.string()
            .min(8)
            .pattern(new RegExp('[a-zA-Z0-9]'))
            .required()
            .messages({'string.min': '"password": min 8 characters'}),
        role: joi.string()
            .required()
    })
    const validation = schema.validate(req.body, {abortEarly:false})
    if (validation.error) {
        return res.json({success: false, from: 'validator', message: validation.error.details, test: validation})
    }
    next()
}

module.exports = validator