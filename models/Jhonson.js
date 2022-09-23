const mongoose = require('mongoose')

const schema = new mongoose.Schema ({
    code: {type:String, required:true},
    photo: {type:String, required:true},
    x: {type:Number, required:true}, //alto
    y: {type:Number, required:true}, //ancho
    z: {type:Number, required:true}, //espesor
    acc: [{type: mongoose.Types.ObjectId , ref:'accesories'}]
})

const Jhonson = mongoose.model('jhonsons',schema)
module.exports = Jhonson