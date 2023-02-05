const mongoose = require('mongoose')

const schema = new mongoose.Schema ({
    order: {type:Number, required:true},
    code: {type:String, required:true}, //codigo según catalogo
    type: {type:String, required:true}, //tipo de acero
    photo: {type:String, required:true},
    x: {type:Number, required:true}, //alto
    y: {type:Number, required:true}, //ancho
    z: {type:Number, required:true}, //espesor
    instalation: [{ type: String, enum: ['monocomando','dosificador','tres agujeros','inferior'] }],
},{
    timestamps: true
},{
    versionKey: false
})

const Jhonson = mongoose.model('jhonsons',schema)
module.exports = Jhonson