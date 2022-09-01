const Plate = require('../models/Plate')
const typeControllers = require('./typeControllers')
const stateControllers = require('./stateControllers')
const { query } = require('express')

const plateControllers = {

    createPlate: async(req,res) => {
        if (req.user.role==='admin'||req.user.role==='user') {
            try {
                let type = await typeControllers.getOneType(req.body.type) //busco el tipo
                req.body.state = await stateControllers.newState(type) //actualizo el estado
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
        let plates = []
        let error = null
/*         let query ={}
        if (req.query.color) {
            console.log(req.query.color)
        } */
        try {
            plates = await Plate.find()
                .populate("type",{name:1})
                .populate("color",{name:1,photo:1})
                .populate("state")
                .populate("company",{nameCompany:1})
            console.log(plates)
        } catch(errorDeCatcheo) {
            error='error'
            console.log(errorDeCatcheo)
        }
        res.json({
            response: error ? 'ERROR' : plates,
            success: error ? false : true,
        })
    },

    getOnePlate: async(req,res) => {
        let {id} = req.params
        let onePlate = {}
        let error = null
        try {
            onePlate = await Plate.findOne({lot:id})
                .populate("type",{name:1})
                .populate("color",{name:1})
                .populate("state")
                .populate("company",{companyName:1})
        } catch(errorDeCatcheo) {
            error='error'
            console.log(errorDeCatcheo)
        }
        res.json({
            response: error ? 'ERROR' : onePlate,
            success: error ? false : true,
        })
    },

    putPlate: async(req,res) => {
        let {id} = req.params
        let putPlate = {}
        let error = null
        try {
            putPlate = await Plate.findOneAndUpdate({lot:id},req.body,{new: true})
        } catch(errorDeCatcheo) {
            error='error'
            console.log(errorDeCatcheo)
        }
        res.json({
            response: error ? 'ERROR' : putPlate,
            success: error ? false : true,
        })
    },

    changeState: async(req,res) => {
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
    },

    deletePlate: async(req,res) => {
        let {id} = req.params
        let deletePlate = {}
        let error = null
        try {
            deletePlate = await Plate.findOneAndDelete({lot:id})
        } catch(errorDeCatcheo) {
            error='error'
            console.log(errorDeCatcheo)
        }
        res.json({
            response: error ? 'ERROR' : deletePlate,
            success: error ? false : true,
        })
    }
    
}

module.exports = plateControllers