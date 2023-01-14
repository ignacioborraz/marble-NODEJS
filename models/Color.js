const mongoose = require('mongoose')

const schema = new mongoose.Schema ({
    name: {type:String, required:true},
    photo: {type:String, required:true},
    company: {type: mongoose.Types.ObjectId , ref:'companies', required:true},
},{
    timestamps: true
})

const Color = mongoose.model('colors',schema)
module.exports = Color