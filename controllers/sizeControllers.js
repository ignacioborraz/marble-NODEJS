const Size = require('../models/Size')

const sizeControllers = {

    createSize: async(req,res) => {
        let state = {state: req.body.state, date: Date.now()}
        let newSize = {}
        let error = null        
        try {
            newSize = await new Size(req.body)
            newSize.state = state
            await newSize.save()
        } catch(errorDeCatcheo) {
            error='error'
            console.log(errorDeCatcheo)
        }
        res.json({
            response: error ? 'ERROR' : newSize,
            success: error ? false : true,
            error: error
        })
    },

    getSizes: async(req,res) => {
        let sizes = []
        let error = null
        try {
            sizes = await Size.find()
            //console.log(sizes)
        } catch(errorDeCatcheo) {
            error='error'
            console.log(errorDeCatcheo)
        }
        res.json({
            response: error ? 'ERROR' : sizes,
            success: error ? false : true,
            error: error
        })
    },

    getOneSize: async(req,res) => {
        let {id} = req.params
        let oneSize = {}
        let error = null
        try {
            oneSize = await Size.findOne({_id:id})
        } catch(errorDeCatcheo) {
            error='error'
            console.log(errorDeCatcheo)
        }
        res.json({
            response: error ? 'ERROR' : oneSize,
            success: error ? false : true,
            error: error
        })
    },

    deleteSize: async(req,res) => {
        let {id} = req.params
        let deleteSize = {}
        let error = null
        try {
            deleteSize = await Size.findOneAndDelete({_id:id})
        } catch(errorDeCatcheo) {
            error='error'
            console.log(errorDeCatcheo)
        }
        res.json({
            response: error ? 'ERROR' : deleteSize,
            success: error ? false : true,
            error: error
        })
    }
    
}

module.exports = sizeControllers