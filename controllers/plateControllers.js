const Plate = require('../models/Plate')
const Type = require('../models/Type')
const State = require('../models/State')

const plateControllers = {

    create: async(req,res,next) => {
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
        } catch(error) {
            next(error)
        }
    },

    all: async(_req,res,next) => {
        try {
            let plates = await Plate.find()
                .populate("type",{name:1,width:1,height:1,thickness:1})
                .populate("color",{name:1,photo:1})
                .populate("state")
                .populate("lastStates")
                .populate("company",{nameCompany:1})
                .sort({name: 'asc'})
            if (plates) {
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
        } catch(error) {
            next(error)
        }
        
    },

    one: async(req,res,next) => {
        let {id} = req.params
        try {
        let plate = await Plate.findOne({_id:id})
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
        } catch(error) {
            next(error)
        }
    },

    put: async(req,res,next) => {
        let {id} = req.params
        try {
            let plate = await Plate.findOneAndUpdate({_id:id},req.body,{new: true})
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
        } catch(error) {
            next(error)
        }
    },

    changeState: async(req,res,next) => {
        let {id} = req.params
        let plate = {}
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
            plate.state = newState._id
            plate.lastStates.push(newState._id)
            plate.done = req.body.done
            await plate.save()
            res.status(400).json({
                messagge: 'ok',
                success: true
            })
        } catch(error) {
            next(error)
        }
    },

    destroy: async(req,res,next) => {
        let {id} = req.params
        try {
            let plate = await Plate.findOneAndDelete({_id:id})
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
        } catch(error) {
            next(error)
        }
    }
    
}

module.exports = plateControllers