const Color = require('../models/Color')

const controller = {

    create: async(req,res) => {
        if (req.user) {
            try {
                await new Color(req.body).save()
                res.status(201).json({
                    messagge: 'material creado',
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
            let query = {}
            if (req.query.cia) {
                query.company = req.query.cia
            }
            if (req.query.name) {
                query.name = new RegExp(req.query.name, 'i')
            }
            try {
                let colors = await Color.find(query).sort({name:'asc'})
                    .populate("company", {nameCompany:1})
                if (colors) {
                    res.status(200).json({
                        response: colors,
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
                let color = await Color.findOne({_id:req.params.id})
                    .populate("company", {nameCompany:1})
                if (color) {
                    res.status(200).json({
                        response: color,
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
                let color = await Color.findOneAndUpdate({_id:req.params.id},req.body,{new: true})
                if (color) {
                    res.status(200).json({
                        messagge: 'color modificado',
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
                let color = await Color.findOneAndDelete({_id:req.params.id})
                if (color) {
                    res.status(200).json({
                        messagge: 'color eliminado',
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