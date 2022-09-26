const Sink = require('../models/Sink')

const controller = {

    create: async(req,res) => {
        if (req.user) {
            try {
                await new Sink(req.body).save()
                res.status(201).json({
                    messagge: 'pileta creada',
                    success: true
                })
            } catch(errorDeCatcheo) {
                console.log(errorDeCatcheo)
                res.status(400).json({
                    messagge: 'error',
                    success: false
                })
            }
        } else {
            res.status(401).json({
                messagge: 'no autorizado',
                success: false
            })
        }
    },

    get: async(req,res) => {        
        if (req.user) {
            let query ={}
            if (req.query.internal) {
                if (req.query.internal === 'true') {
                    query.note = null
                    query.done = false
                } else {
                    query.internal = new RegExp(req.query.internal, 'i')
                }
            }
            if (req.query.note) {
                if (req.query.note === 'true') {
                    query.internal = null
                    query.done = false
                } else {
                    query.note = new RegExp(req.query.note, 'i')
                }
            }
            if (req.query.done) {
                query.done = req.query.done
            }
            try {
                let sinks = await Sink.find(query).sort({code: 'asc'})
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
            } catch(errorDeCatcheo) {
                console.log(errorDeCatcheo)
                res.status(400).json({
                    messagge: 'error',
                    success: false
                })
            }
        } else {
            res.status(401).json({
                messagge: 'no autorizado',
                success: false
            })
        }
    },

    one: async(req,res) => {
        if (req.user) {
            try {
                let sink = await Sink.findOne({_id:req.params.id})
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
            } catch(errorDeCatcheo) {
                console.log(errorDeCatcheo)
                res.status(400).json({
                    messagge: 'error',
                    success: false
                })
            }
        } else {
            res.status(401).json({
                messagge: 'no autorizado',
                success: false
            })
        }
    },

    put: async(req,res) => {
        if (req.user) {
            try {
                let sink = await Sink.findOneAndUpdate({_id:req.params.id},req.body,{new: true})
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
            } catch(errorDeCatcheo) {
                console.log(errorDeCatcheo)
                res.status(400).json({
                    messagge: 'error',
                    success: false
                })
            }
        } else {
            res.status(401).json({
                messagge: 'no autorizado',
                success: false
            })
        }
    },

    destroy: async(req,res) => {
        if (req.user) {
            try {
                let sink = await Sink.findOneAndDelete({_id:req.params.id})
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
            } catch(errorDeCatcheo) {
                console.log(errorDeCatcheo)
                res.status(400).json({
                    messagge: 'error',
                    success: false
                })
            }
        } else {
            res.status(401).json({
                messagge: 'no autorizado',
                success: false
            })
        }
    }
    
}

module.exports = controller