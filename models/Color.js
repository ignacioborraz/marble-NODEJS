const mongoose = require('mongoose')

const colorSchema = new mongoose.Schema ({
    name: {type:String, required:true}, //nombre
    photo: {type:String, required:true}, //foto
    company: {type: mongoose.Types.ObjectId , ref:'companies'},
})

const Color = mongoose.model('colors',colorSchema)
module.exports = Color

