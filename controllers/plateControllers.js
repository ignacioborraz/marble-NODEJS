const Plate = require('../models/Plate')
const typeControllers = require('./typeControllers')
const stateControllers = require('./stateControllers')

const plateControllers = {

    createPlate: async(req,res) => {
        //console.log(req.body)
        let newPlate = {}
        let error = null
        try {
            let type = await typeControllers.getOneType(req.body.type)
            //console.log(type)
            req.body.state = await stateControllers.newState(type)
            //console.log(req.body)
            newPlate = await new Plate(req.body)
            await newPlate.save()
        } catch(errorDeCatcheo) {
            error='error'
            console.log(errorDeCatcheo)
        }
        res.json({
            response: error ? 'ERROR' : newPlate,
            success: error ? false : true,
            error: error
        })
    },

    getPlates: async(req,res) => {
        let plates = []
        let error = null
        try {
            plates = await Plate.find()
                .populate("type",{name:1})
                .populate("color",{name:1})
                .populate("state")
                .populate("company",{nameCompany:1})
            //console.log(plates)
        } catch(errorDeCatcheo) {
            error='error'
            console.log(errorDeCatcheo)
        }
        res.json({
            response: error ? 'ERROR' : plates,
            success: error ? false : true,
            error: error
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
            error: error
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
            error: error
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
            error: error
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
            error: error
        })
    }
    
}

module.exports = plateControllers