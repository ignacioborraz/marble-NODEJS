const Color = require('../models/Color')

const colorControllers = {

    createColor: async(req,res) => {
        const {name,photo,company} = req.body
        //console.log(req.body)
        let newColor = {}
        let error = null        
        try {
            newColor = await new Color({name,photo,company}).save()
            //console.log(newColor)
        } catch(errorDeCatcheo) {
            error='error'
            console.log(errorDeCatcheo)
        }
        res.json({
            response: error ? 'ERROR' : newColor,
            success: error ? false : true,
            error: error
        })
    },

    getColors: async(req,res) => {
        let colors = []
        let error = null
        try {
            colors = await Color.find()
                .populate("company", {nameCompany:1})
            //console.log(colors)
        } catch(errorDeCatcheo) {
            error='error'
            console.log(errorDeCatcheo)
        }
        res.json({
            response: error ? 'ERROR' : colors,
            success: error ? false : true,
            error: error
        })
    },

    getOneColor: async(req,res) => {
        let {id} = req.params
        let oneColor = {}
        let error = null
        try {
            oneColor = await Color.findOne({_id:id})
        } catch(errorDeCatcheo) {
            error='error'
            console.log(errorDeCatcheo)
        }
        res.json({
            response: error ? 'ERROR' : oneColor,
            success: error ? false : true,
            error: error
        })
    },

    putColor: async(req,res) => {
        let {id} = req.params
        let putColor = {}
        let error = null
        try {
            putColor = await Color.findOneAndUpdate({_id:id},req.body,{new: true})
        } catch(errorDeCatcheo) {
            error='error'
            console.log(errorDeCatcheo)
        }
        res.json({
            response: error ? 'ERROR' : putColor,
            success: error ? false : true,
            error: error
        })
    },

    deleteColor: async(req,res) => {
        let {id} = req.params
        let deleteColor = {}
        let error = null
        try {
            deleteColor = await Color.findOneAndDelete({_id:id})
        } catch(errorDeCatcheo) {
            error='error'
            console.log(errorDeCatcheo)
        }
        res.json({
            response: error ? 'ERROR' : deleteColor,
            success: error ? false : true,
            error: error
        })
    }
    
}

module.exports = colorControllers