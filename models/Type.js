const mongoose = require('mongoose')

const schema = new mongoose.Schema ({
    name: {type:String, required:true}, //nombre
    height: {type:Number, required:true}, //alto
    width: {type:Number, required:true}, //ancho
    thickness: {type:Number, required:true}, //espesor
    company: {type: mongoose.Types.ObjectId , ref:'companies'}
},{
    timestamps: true
},{
    versionKey: false
})

const Types = mongoose.model('types',schema)
module.exports = Types