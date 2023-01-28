const Acc = require('../models/Acc')

const controller = {

    create: async(req,res,next) => {
        try {
            await Acc.create(req.body)
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
        try {
            let all = await Acc.find(query)
                .sort({code:'asc'})
            return res.status(200).json({
                response: { accesories: all },
                success: true
            })
        } catch(error) {
            next(error)
        }
    },

    one: async(req,res,next) => {
        try {
            let one = await Acc.findById(req.params.id)
            if (one) {
                return res.status(200).json({
                    response: { accesory: one },
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
            let one = await Acc.findOneAndUpdate(
                { _id: req.params.id },
                req.body,
                { new: true }
            )
            if (one) {
                return res.status(200).json({
                    response: { accesory: one },
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
            let one = await Acc.findOneAndDelete({ _id: req.params.id })
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