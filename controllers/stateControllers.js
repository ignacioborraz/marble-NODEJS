const State = require('../models/State')

const stateControllers = {

    createState: async(req,res) => {
        let date = Date.now()
        let newState = {}
        let error = null
        try {
            newState = await new State(req.body)
            newState.date = date
            await newState.save()
        } catch(errorDeCatcheo) {
            error='error'
            console.log(errorDeCatcheo)
        }
        res.json({
            response: error ? 'ERROR' : newState,
            success: error ? false : true,
            error: error
        })
    },

    newState: async(req,res) => {
        let date = Date.now()
        let newState = {}
        let error = null
        try {
            newState = await new State({
                state: 'nueva',
                width: req.width,
                height: req.height
            })
            newState.date = date
            await newState.save()
            return newState
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

    changeState: async(req,res) => {
        let date = Date.now()
        let newState = {}
        let error = null
        try {
            newState = await new State(req)
            newState.date = date
            await newState.save()
            return newState
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

    getStates: async(req,res) => {
        let states = []
        let error = null
        try {
            states = await State.find()
            //console.log(states)
        } catch(errorDeCatcheo) {
            error='error'
            console.log(errorDeCatcheo)
        }
        res.json({
            response: error ? 'ERROR' : states,
            success: error ? false : true,
            error: error
        })
    },

    getOneState: async(req,res) => {
        let {id} = req.params
        let oneState = {}
        let error = null
        try {
            oneState = await State.findOne({_id:id})
        } catch(errorDeCatcheo) {
            error='error'
            console.log(errorDeCatcheo)
        }
        res.json({
            response: error ? 'ERROR' : oneState,
            success: error ? false : true,
            error: error
        })
    },

    putState: async(req,res) => {
        let {id} = req.params
        let putState = {}
        let error = null
        try {
            putState = await State.findOneAndUpdate({_id:id},req.body,{new: false})
        } catch(errorDeCatcheo) {
            error='error'
            console.log(errorDeCatcheo)
        }
        res.json({
            response: error ? 'ERROR' : putState,
            success: error ? false : true,
            error: error
        })
    },

    deleteState: async(req,res) => {
        let {id} = req.params
        let deleteState = {}
        let error = null
        try {
            deleteState = await State.findOneAndDelete({_id:id})
        } catch(errorDeCatcheo) {
            error='error'
            console.log(errorDeCatcheo)
        }
        res.json({
            response: error ? 'ERROR' : deleteState,
            success: error ? false : true,
            error: error
        })
    }
    
}

module.exports = stateControllers