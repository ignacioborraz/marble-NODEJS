const Type= require('../models/Type')

const typeControllers = {

    createType: async(req,res) => {
        const {name,height,width,thickness,company} = req.body
        //console.log(req.body)
        let newType= {}
        let error = null        
        try {
            newType= await new Type({name,height,width,thickness,company}).save()
            //console.log(newType)
        } catch(errorDeCatcheo) {
            error='error'
            console.log(errorDeCatcheo)
        }
        res.json({
            response: error ? 'ERROR' : newType,
            success: error ? false : true,
            error: error
        })
    },

    getTypes: async(req,res) => {
        let types = []
        let error = null
        try {
            types = await Type.find()
                .populate("company", {nameCompany:1})
            //console.log(types)
        } catch(errorDeCatcheo) {
            error='error'
            console.log(errorDeCatcheo)
        }
        res.json({
            response: error ? 'ERROR' : types,
            success: error ? false : true,
            error: error
        })
    },

    getOneType: async(id,res) => {
        let oneType= {}
        let error = null
        try {
            oneType= await Type.findOne({_id:id})
                .populate("company", {nameCompany:1})
            return oneType
        } catch(errorDeCatcheo) {
            error='error'
            console.log(errorDeCatcheo)
            res.json({
                response: 'ERROR',
                success: false,
                error: error
            })
        }
    },

    getTypesFromCompany: async(req,res) => {
        let {id} = req.params
        let types = []
        let error = null
        try {
            types = await Type.find({company:id})
        } catch(errorDeCatcheo) {
            error='error'
            console.log(errorDeCatcheo)
        }
        res.json({
            response: error ? 'ERROR' : types,
            success: error ? false : true,
            error: error
        })
    },

    putType: async(req,res) => {
        let {id} = req.params
        let putType= {}
        let error = null
        try {
            putType= await Type.findOneAndUpdate({_id:id},req.body,{new: true})
        } catch(errorDeCatcheo) {
            error='error'
            console.log(errorDeCatcheo)
        }
        res.json({
            response: error ? 'ERROR' : putType,
            success: error ? false : true,
            error: error
        })
    },

    deleteType: async(req,res) => {
        let {id} = req.params
        let deleteType= {}
        let error = null
        try {
            deleteType= await Type.findOneAndDelete({_id:id})
        } catch(errorDeCatcheo) {
            error='error'
            console.log(errorDeCatcheo)
        }
        res.json({
            response: error ? 'ERROR' : deleteType,
            success: error ? false : true,
            error: error
        })
    }
    
}

module.exports = typeControllers