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
        try {
            colors = await Color.find()
                .populate("company", {nameCompany:1})
            //console.log(colors)
            res.status(200).json({
                response: colors,
                success: true
            })
        } catch(errorDeCatcheo) {
            console.log(errorDeCatcheo)
            res.status(400).json({
                messagge: 'error',
                success: false
            })
        }
    },

    getOneColor: async(req,res) => {
        let color = {}
        try {
            color = await Color.findOne({_id:req.params.id})
            res.status(200).json({
                response: color,
                success: true
            })
        } catch(errorDeCatcheo) {
            console.log(errorDeCatcheo)
            res.status(400).json({
                messagge: 'error',
                success: false
            })
        }
    },

    getColorsFromCompany: async(req,res) => {
        let colors = []
        let query = {company: req.params.id} 
        if (req.query.color) {
            //console.log(req.query.color)
            query.name = new RegExp(req.query.color, 'i')
            /*
            la ruta en axios para el filtro es
            http://localhost:8000/api/marble/colors/:id?color=palo
            */
            //console.log(query);
        }
        try {
            colors = await Color.find(query)
            res.status(200).json({
                response: colors,
                success: true
            })
        } catch(errorDeCatcheo) {
            console.log(errorDeCatcheo)
            res.status(400).json({
                messagge: 'error',
                success: false
            })
        }
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