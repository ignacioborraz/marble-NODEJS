const State = require('../models/State')

const controller = {

    create: async(req,res,next) => {
        req.body.user = req.user._id
        try {
            await State.create(req.body)
            return res.status(201).json({
                response: 'creado',
                success: true
            })
        } catch(error) {
            next(error)
        }
    },

    all: async(req,res,next) => {
        try {
            let all = await State.find()
                .populate("user","nick")
            return res.status(200).json({
                response: { states: all },
                success: true
            })
        } catch(error) {
            next(error)
        }
    },

    one: async(req,res,next) => {
        try {
            let one = await State.findById(req.params.id)
                .populate("user","nick")
            if (one) {
                return res.status(200).json({
                    response: { state: one },
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
        req.body.date = Date.now()
        try {
            let one = await State.findOneAndUpdate(
                { _id: req.params.id },
                req.body,
                { new: true }
            )
            if (one) {
                return res.status(200).json({
                    response: { state: one },
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
            let one = await State.findOneAndDelete({ _id: req.params.id })
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