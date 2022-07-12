const mongoose = require('mongoose')

const companySchema = new mongoose.Schema ({
    nameCompany: {type:String, required:true},
    logoCompany: {type:String, required:true},
    detailCompany: {type:String, required:true}
})

const Company = mongoose.model('companies',companySchema)
module.exports = Company

