const Jhonson = require('../models/Jhonson')

const controller = {

    create: async(req,res,next) => {
        try {
            await Jhonson.create(req.body)
            return res.status(201).json({
                response: 'creado',
                success: true
            })
        } catch(error) {
            next(error)
        }
    },

    all: async(req,res,next) => {
        let query = {}
        if (req.query.code) {
            query.code = new RegExp(req.query.code, 'i')
        }
        if (req.query.one) {
            query.code = req.query.one
        }
        if (req.query.type) {
            query.type = new RegExp(req.query.type, 'i')
        }
        try {
            let all = await Jhonson.find(query)
                .sort({code:'asc'})
            return res.status(200).json({
                response: { jhonsons: all },
                success: true
            })
        }  catch(error) {
            next(error)
        }
    },

    one: async(req,res,next) => {
        try {
            let one = await Jhonson.findById(req.params.id)
            if (one) {
                return res.status(200).json({
                    response: { jhonson: one },
                    success: true
                })    
            }
            return res.status(404).json({
                response: 'no encontrado',
                success: false
            })
        } catch(error) {
            next(error)
        }
    },

    update: async(req,res,next) => {
        try {
            let one = await Jhonson.findOneAndUpdate(
                { _id: req.params.id },
                req.body,
                { new: true }
            )
            if (one) {
                return res.status(200).json({
                    response: { jhonson: one },
                    success: true
                })    
            }
            return res.status(404).json({
                response: 'no encontrado',
                success: false
            })
        } catch(error) {
            next(error)
        }
    },

    destroy: async(req,res,next) => {
        try {
            let one = await Jhonson.findOneAndDelete({ _id: req.params.id })
            if (one) {
                return res.status(200).json({
                    response: 'eliminado',
                    success: true
                })    
            }
            return res.status(404).json({
                response: 'no encontrado',
                success: false
            })
        } catch(error) {
            next(error)
        }
    }
    
}

module.exports = controller