const Plate = require('../models/Plate')
const Type = require('../models/Type')
const State = require('../models/State')
const typeControllers = require('./typeControllers')
const stateControllers = require('./stateControllers')
const { query } = require('express')

const plateControllers = {

    createPlate: async(req,res) => {
        if (req.user) {
            try {
                let type = await Type.findOne({_id:req.body.type}) //busco el tipo
                let state = await new State({
                    state: 'nueva',
                    width: type.width,
                    height: type.height
                })
                state.date = Date.now()
                await state.save()
                req.body.state = state //actualizo el estado
                await Plate.create(req.body) //creo la placa
                res.status(201).json({
                    messagge: 'placa creada',
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

    getPlates: async(req,res) => {
        if (req.user) {
            let query ={}
            if (req.query.lot) {
                query.lot = new RegExp(req.query.lot, 'i')
                console.log(req.query.lot)
            }
            if (req.query.internal) {
                query.internal = new RegExp(req.query.internal, 'i')
                console.log(req.query.internal)
            }
            if (req.query.note) {
                query.note = new RegExp(req.query.note, 'i')
                console.log(req.query.note)
            }
            if (req.query.done) {
                query.done = req.query.done
                console.log(req.query.done)
            }
            console.log(query)
            try {
                let plates = await Plate.find(query)
                    .populate("type",{name:1})
                    .populate("color",{name:1,photo:1})
                    .populate("state")
                    .populate("company",{nameCompany:1})
                if (plates) {
                    plates = plates.sort((a, b) => {
                        if (a.name > b.name) {return 1}
                        if (a.name < b.name) {return -1}
                        return 0
                    })
                    res.status(200).json({
                        response: plates,
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

    getOnePlate: async(req,res) => {
        if (req.user) {
        try {
            let plate = await Plate.findOne({_id:req.paramsid})
                .populate("type",{name:1})
                .populate("color",{name:1})
                .populate("state")
                .populate("company",{companyName:1})
                if (plate) {
                    res.status(200).json({
                        response: plate,
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

    putPlate: async(req,res) => {
        if (req.user) {
            try {
                let plate = await Plate.findOneAndUpdate({_id:req.params.id},req.body,{new: true})
                    if (plate) {
                        res.status(200).json({
                            response: 'placa modificada',
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

    changeState: async(req,res) => {
        if (req.user) {
            let {id} = req.params
            let plate = {}
            let error = null
            try {
                plate = await Plate.findOne({lot:id})
                let newState = await stateControllers.changeState(req.body)
                console.log(newState)
                console.log(plate.lot)
                console.log(plate.state)
                plate.state.push(newState._id)
                await plate.save()
            } catch(errorDeCatcheo) {
                error='error'
                console.log(errorDeCatcheo)
            }
            res.json({
                response: error ? 'ERROR' : plate,
                success: error ? false : true,
            })
        } else {
            res.status(401).json({
                messagge: 'no autorizado',
                success: false
            })
        }
    },

    deletePlate: async(req,res) => {
        if (req.user) {
            try {
                let plate = await Plate.findOneAndDelete({_id:req.params.id})
                    if (plate) {
                        res.status(200).json({
                            response: 'placa modificada',
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

module.exports = plateControllers