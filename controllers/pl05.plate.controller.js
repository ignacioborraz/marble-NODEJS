const Plate = require('../models/Plate')
const Type = require('../models/Type')
const State = require('../models/State')

const plateControllers = {

    create: async(req,res,next) => {
        try {
            let type = await Type.findOne({ _id: req.body.type }) //busco el tipo
            let state = await State.create({ //defino el estado "nuevo"
                state: 'nueva',
                width: type.width,
                heightSquare: "",
                height: type.height,
                widthSquare: "",
                user: req.user._id
            })
            req.body.state = state //cargo estado inicial
            req.body.lastStates = [state] //que coincide con actual
            await Plate.create(req.body) //creo la placa
            return res.status(201).json({
                response: 'creado',
                success: true
            })
        } catch(error) {
            next(error)
        }
    },

    all: async(_req,res,next) => {
        //armar queries
        try {
            let all = await Plate.find()
                .populate("type","name width height thickness")
                .populate("color","name photo")
                .populate({path: "state", populate: {path: 'user', select: 'nick'}})
                .populate({path: "lastStates", populate: {path: 'user', select: 'nick'}})
                .populate("company","nameCompany")
                .sort({name:'asc'})
            if (all) {
                return res.status(200).json({
                    response: { plates: all },
                    success: true
                })
            }
            return res.status(404).json({
                response: 'no se encontraron coincidencias',
                success: true
            })
        } catch(error) {
            next(error)
        }        
    },

    one: async(req,res,next) => {
        try {
            let one = await Plate.findById(req.params.id)   
                .populate("type","name width height thickness")
                .populate("color","name photo")
                .populate({path: "state", populate: {path: 'user', select: 'nick'}})
                .populate({path: "lastStates", populate: {path: 'user', select: 'nick'}})
                .populate("company","nameCompany")
            if (one) {
                return res.status(200).json({
                    response: { plate: one },
                    success: true
                })
            }
            return res.status(404).json({
                response: 'no encontrado',
                success: true
            })
        } catch(error) {
            next(error)
        }
    },

    update: async(req,res,next) => {
        try {
            let one = await Plate.findOneAndUpdate(
                { _id: req.params.id },
                req.body,
                { new: true }
            ).populate("type","name width height thickness")
                .populate("color","name photo")
                .populate("state")
                .populate("lastStates")
                //.populate("user","nick")
                .populate("company","nameCompany")
            if (one) {
                return res.status(200).json({
                    response: { plate: one },
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
            let one = await Plate.findOneAndDelete({ _id: req.params.id })
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
    },

    changeState: async(req,res,next) => {
        console.log(req.user)
        try {
            let one = await Plate.findById(req.params.id)   
            if (one) {
                req.body.user = req.user._id
                let newState = await new State(req.body).save()
                one.state = newState._id
                one.lastStates.push(newState._id)
                one.done = req.body.done
                await one.save()
                return res.status(400).json({
                    response: 'modificado',
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

module.exports = plateControllers