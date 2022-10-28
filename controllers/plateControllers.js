const Plate = require('../models/Plate')
const Type = require('../models/Type')
const State = require('../models/State')

const plateControllers = {

    createPlate: async(req,res) => {
        if (req.user) {
            req.body.user = req.user.id
            try {
                let type = await Type.findOne({_id:req.body.type}) //busco el tipo
                let state = await new State({
                    state: 'nueva',
                    width: type.width,
                    heightSquare: "",
                    height: type.height,
                    widthSquare: "",
                    user: req.user.id
                }) //defino el estado "nuevo"
                state.date = Date.now()
                await state.save()
                req.body.state = state //cargo estado inicial
                req.body.lastStates = [state] //que coincide con actual
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
                //console.log(req.query.lot)
            }
            if (req.query.internal) {
                if (req.query.internal === 'true') {
                    query.note = null
                    query.done = false
                } else {
                    query.internal = new RegExp(req.query.internal, 'i')
                    //console.log(req.query.internal)
                }
            }
            if (req.query.note) {
                if (req.query.note === 'true') {
                    query.internal = null
                    query.done = false
                } else {
                    query.note = new RegExp(req.query.note, 'i')
                    //console.log(req.query.note)
                }
            }
            if (req.query.done) {
                query.done = req.query.done
                //console.log(req.query.done)
            }
            //console.log(query)
            try {
                let plates = await Plate.find(query)
                    .populate("type",{name:1,width:1,height:1,thickness:1})
                    .populate("color",{name:1,photo:1})
                    .populate("state")
                    .populate("lastStates")
                    //.populate("user",{nick:1})
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
            let plate = await Plate.findOne({_id:req.params.id})
                .populate("type")
                .populate("color")
                .populate("state")
                .populate("lastStates")
                .populate("user",{nick:1})
                .populate("company",{nameCompany:1})
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
        console.log(req.user);
        console.log(req.body);
        console.log(req.params);
        if (req.user) {
            let {id} = req.params
            let plate = {}
            let error = null
            try {
                plate = await Plate.findOne({_id:id})
                    .populate("type",{name:1})
                    .populate("color",{name:1})
                    .populate("state")
                    .populate("lastStates")
                    .populate("user",{nick:1})
                    .populate("company",{companyName:1})
                req.body.user = req.user.id
                let newState = await new State(req.body).save()
                console.log(newState)
                console.log(plate.lot)
                console.log(plate.state)
                plate.state = newState._id
                plate.lastStates.push(newState._id)
                plate.done = req.body.done
                await plate.save()
                res.status(400).json({
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