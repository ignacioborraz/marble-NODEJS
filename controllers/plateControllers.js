const Plate = require('../models/Plate')
const Size = require('../models/Size')

const plateControllers = {

    createPlate: async(req,respuesta) => {
        const {name,photo,size,lot,company} = req.body
        //console.log(req.body)
        let newPlate = {}
        let error = null
        try {
            newPlate = await new Plate({name,photo,size,lot,company}).save()
        } catch(errorDeCatcheo) {
            error='error'
            console.log(errorDeCatcheo)
        }
        respuesta.json({
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
                .populate("company", {nameCompany:1})
                .populate("size")
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
            onePlate = await Plate.findOne({_id:id})
                .populate("company", {nameCompany:1})
                .populate("size")
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
            putPlate = await Plate.findOneAndUpdate({_id:id},req.body,{new: true})
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
        console.log(req.body)
        let {id} = req.params
        let state = {state: req.body.state, date: Date.now()}
        let changePlate = {}
        let changeSize = {}
        let error = null
        try {
            changeSize = await new Size(req.body)
            changeSize.state = state
            await changeSize.save()
            try {
                changePlate = await Plate.findOne({_id:id})
                    .populate("company", {nameCompany:1})
                    .populate("size")
                changePlate.size.push(changeSize._id)
                await changePlate.save()
            } catch(errorDeCatcheo) {
                error='error'
                console.log(errorDeCatcheo)
            }
        } catch(errorDeCatcheo) {
            error='error'
            console.log(errorDeCatcheo)
        }
        res.json({
            response: error ? 'ERROR' : changePlate,
            success: error ? false : true,
            error: error
        })
    },

    deletePlate: async(req,res) => {
        let {id} = req.params
        let deletePlate = {}
        let error = null
        try {
            deletePlate = await Plate.findOneAndDelete({_id:id})
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