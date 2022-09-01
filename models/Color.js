const mongoose = require('mongoose')

const colorSchema = new mongoose.Schema ({
    name: {type:String, required:true},
    photo: {type:String, required:true},
    company: {type: mongoose.Types.ObjectId , ref:'companies', required:true},
})

const Color = mongoose.model('colors',colorSchema)
module.exports = Color

