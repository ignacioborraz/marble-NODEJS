const Stock = require('../models/Stock')

const controller = {

    create: async(req,res) => {
        if (req.user) {
            req.body.user = req.user.id
            try {
                await new Stock(req.body).save()
                res.status(201).json({
                    messagge: 'ok',
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
                let stocks = await Stock.find(query).sort({code: 'asc'})
                    .populate("user", {nick: 1})    
                    .populate({path: "sink", populate: { path: 'jhonson' }})
                    .populate({path: "sink", populate: { path: 'accesories' }})
                if (stocks) {
                    res.status(200).json({
                        response: stocks,
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
                let stock = await Stock.findOne({_id:req.params.id})
                    .populate("sink")
                if (stock) {
                    res.status(200).json({
                        response: stock,
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
                let stock = await Stock.findOneAndUpdate({_id:req.params.id},req.body,{new: true})
                if (stock) {
                    res.status(200).json({
                        messagge: 'pedido modificado',
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
                let stock = await Stock.findOneAndDelete({_id:req.params.id})
                if (stock) {
                    res.status(200).json({
                        messagge: 'pedido eliminado',
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