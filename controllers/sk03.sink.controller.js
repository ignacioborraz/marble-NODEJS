const Sink = require('../models/Sink')

const controller = {

    create: async(req,res,next) => {
        req.body.done = false
        req.body.user = req.user.id
        try {
            let one = await new Sink(req.body).save()
            return res.status(201).json({
                messagge: 'pileta creada',
                response: one._id,
                success: true
            })
        } catch(error) {
            next(error)
        }
    },

    all: async(_req,res,next) => {    
        try {
            let sinks = await Sink.find().sort({code: 'asc'})
                .populate("jhonson")
                .populate("accesories")
            if (sinks) {
                res.status(200).json({
                response: sinks,
                success: true
                })
            } else {
                res.status(404).json({
                messagge: 'no se encontraron coincidencias',
                success: true
                })
            }
        } catch(error) {
            next(error)
        }
    },

    one: async(req,res,next) => {
        try {
            let one = await Sink.findById(req.params.id)
                .populate("jhonson")
                .populate("accesories")
            if (one) {
                return res.status(200).json({
                    response: { sink: one },
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
            let one = await Sink.findOneAndUpdate(
                { _id: req.params.id },
                req.body,
                { new: true }
            )
            if (one) {
                return res.status(200).json({
                    response: { sink: one },
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
            let one = await Sink.findOneAndDelete({ _id: req.params.id })
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