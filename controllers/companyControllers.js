const Company = require('../models/Company')

const companyControllers = {

    createCompany: async(req,res) => {
        const {nameCompany,logoCompany,detailCompany} = req.body
        //console.log(req.body)
        let newCompany = {}
        let error = null        
        try {
            newCompany = await new Company({nameCompany,logoCompany,detailCompany}).save()
            //console.log(newCompany)
        } catch(errorDeCatcheo) {
            error='error'
            console.log(errorDeCatcheo)
        }
        res.json({
            response: error ? 'ERROR' : newCompany,
            success: error ? false : true,
            error: error
        })
    },

    getCompanies: async(req,res) => {
        let companies = []
        let error = null
        try {
            companies = await Company.find()
        } catch(errorDeCatcheo) {
            error='error'
            console.log(errorDeCatcheo)
        }
        res.json({
            response: error ? 'ERROR' : companies,
            success: error ? false : true,
            error: error
        })
    },

    getOneCompany: async(req,res) => {
        let {id} = req.params
        let oneCompany = {}
        let error = null
        try {
            oneCompany = await Company.findOne({_id:id})
        } catch(errorDeCatcheo) {
            error='error'
            console.log(errorDeCatcheo)
        }
        res.json({
            response: error ? 'ERROR' : oneCompany,
            success: error ? false : true,
            error: error
        })
    },

    putCompany: async(req,res) => {
        let {id} = req.params
        let putCompany = {}
        let error = null
        try {
            putCompany = await Company.findOneAndUpdate({_id:id},req.body,{new: true})
        } catch(errorDeCatcheo) {
            error='error'
            console.log(errorDeCatcheo)
        }
        res.json({
            response: error ? 'ERROR' : putCompany,
            success: error ? false : true,
            error: error
        })
    },

    deleteCompany: async(req,res) => {
        let {id} = req.params
        let deleteCompany = {}
        let error = null
        try {
            deleteCompany = await Company.findOneAndDelete({_id:id})
        } catch(errorDeCatcheo) {
            error='error'
            console.log(errorDeCatcheo)
        }
        res.json({
            response: error ? 'ERROR' : deleteCompany,
            success: error ? false : true,
            error: error
        })
    }
    
}

module.exports = companyControllers