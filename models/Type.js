const mongoose = require('mongoose')

const typeSchema = new mongoose.Schema ({
    name: {type:String, required:true}, //nombre
    height: {type:Number, required:true}, //alto
    width: {type:Number, required:true}, //ancho
    thickness: {type:Number, required:true}, //espesor
    company: {type: mongoose.Types.ObjectId , ref:'companies'}
})

const Types = mongoose.model('types',typeSchema)
module.exports = Types

