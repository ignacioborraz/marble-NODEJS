const Sink = require('../models/Sink')

const controller = {

    create: async(req,res,next) => {
        req.body.user = req.user.id
        try {
            let sinkNew = await new Sink(req.body).save()
            res.status(201).json({
                messagge: 'pileta creada',
                response: sinkNew,
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
        let {id} = req.params
        try {
            let sink = await Sink.findOne({_id:id})
                .populate("jhonson")
                .populate("accesories")
            if (sink) {
                res.status(200).json({
                response: sink,
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

    put: async(req,res,next) => {
        let {id} = req.params
        try {
            let sink = await Sink.findOneAndUpdate({_id:id},req.body,{new: true})
            if (sink) {
                res.status(200).json({
                messagge: 'pileta modificada',
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

    destroy: async(req,res,next) => {
        let {id} = req.params
        try {
            let sink = await Sink.findOneAndDelete({_id:id})
            if (sink) {
                res.status(200).json({
                messagge: 'pileta eliminada',
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
    }
    
}

module.exports = controller