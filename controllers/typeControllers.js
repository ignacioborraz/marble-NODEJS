const Type= require('../models/Type')

const typeControllers = {

    createType: async(req,res) => {
        if (req.user.role==='admin'||req.user.role==='user') {
            try {
                await new Type(req.body).save()
                res.status(201).json({
                    messagge: 'tipo creado',
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

    getTypes: async(req,res) => {
        if (req.user.role==='admin'||req.user.role==='user') {
            try {
                let types = await Type.find()
                    .populate("company", {nameCompany:1})
                if (types) {
                    types = types.sort((a, b) => {
                        if (a.name > b.name) {return 1}
                        if (a.name < b.name) {return -1}
                        return 0
                      })
                    res.status(200).json({
                        response: types,
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

    getOneType: async(req,res) => {
        if (req.user.role==='admin'||req.user.role==='user') {
            try {
                let type = await Type.findOne({_id:req.params.id})
                if (type) {
                    res.status(200).json({
                        response: type,
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

    getTypesFromCompany: async(req,res) => {
        console.log(req.params)
        if (req.user.role==='admin'||req.user.role==='user') {
            try {
                let types = await Type.find({company: req.params.id})
                console.log(types)
                if (types) {
                    types = types.sort((a, b) => {
                        if (a.name > b.name) {return 1}
                        if (a.name < b.name) {return -1}
                        return 0
                    })
                    console.log(types)
                    res.status(200).json({
                        response: types,
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

    putType: async(req,res) => {
        if (req.user.role==='admin'||req.user.role==='user') {
            try {
                let type = await Type.findOneAndUpdate({_id:req.params.id},req.body,{new: true})
                if (type) {
                    res.status(200).json({
                        messagge: 'tipo modificado',
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

    deleteType: async(req,res) => {
        if (req.user.role==='admin'||req.user.role==='user') {
            try {
                let type = await Type.findOneAndDelete({_id:req.params.id})
                if (type) {
                    res.status(200).json({
                        messagge: 'tipo eliminado',
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

module.exports = typeControllers