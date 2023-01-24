const mongoose = require('mongoose')

const schema = new mongoose.Schema ({
    nameCompany: {type:String, required:true},
    logoCompany: {type:String, required:true},
    detailCompany: {type:String, required:true}
},{
    timestamps: true
},{
    versionKey: false
})

const Company = mongoose.model('companies',schema)
module.exports = Company