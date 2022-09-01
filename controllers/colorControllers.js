const Color = require('../models/Color')

const colorControllers = {

    createColor: async(req,res) => {
        if (req.user.role==='admin'||req.user.role==='user') {
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

    getColors: async(req,res) => {
        let colors = []
        let error = null
        let query = {} 
        if (req.query.color) {
            console.log(req.query.color)
            query = {name: req.query.color}
            console.log(query);
        }
        try {
            colors = await Color.find(query)
                .populate("company", {nameCompany:1})
            //console.log(colors)
        } catch(errorDeCatcheo) {
            error='error'
            console.log(errorDeCatcheo)
        }
        res.json({
            response: error ? 'ERROR' : colors,
            success: error ? false : true,
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
        })
    },

    getColorsFromCompany: async(req,res) => {
        let {id} = req.params
        let colors = []
        let error = null
        try {
            colors = await Color.find({company:id})
        } catch(errorDeCatcheo) {
            error='error'
            console.log(errorDeCatcheo)
        }
        res.json({
            response: error ? 'ERROR' : colors,
            success: error ? false : true,
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
        })
    }
    
}

module.exports = colorControllers