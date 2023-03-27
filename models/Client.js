const mongoose = require('mongoose')

const schema = new mongoose.Schema ({
    name: { type:String, required: true },
    company: { type:String },
    photo: {type:String }
},{
    timestamps: true
},{
    versionKey: false
})

const Client = mongoose.model('clients',schema)
module.exports = Client