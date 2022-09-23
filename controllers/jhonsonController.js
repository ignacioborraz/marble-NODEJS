const Jhonson = require('../models/Jhonson')

const controller = {

    create: async(req,res) => {
        if (req.user) {
            try {
                await new Jhonson(req.body).save()
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
            try {
                let jhonsons = await Jhonson.find().sort({code: 'asc'})
                if (jhonsons) {
                    res.status(200).json({
                        response: jhonsons,
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
                let jhonson = await Jhonson.findOne({_id:req.params.id})
                if (jhonson) {
                    res.status(200).json({
                        response: jhonson,
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
                let jhonson = await Jhonson.findOneAndUpdate({_id:req.params.id},req.body,{new: true})
                if (jhonson) {
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
                let jhonson = await Jhonson.findOneAndDelete({_id:req.params.id})
                if (jhonson) {
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