const mongoose = require('mongoose')

const schema = new mongoose.Schema ({
    order: { type:Number, required:true },
    name: { type:String, required:true }, //codigo según catalogo
    type: { type:String, required:true }, //tipo de acero
    unique: { type:String, required:true, unique: true },
    photo: { type:String, required:true },
    x: { type:Number, required:true }, //alto
    y: { type:Number, required:true }, //ancho
    z: { type:Number, required:true }, //espesor,
    stock: { type:Number, required:true },
    instalation: [{ type: String, enum: ['monocomando','dosificador','tres agujeros','inferior'] }],
},{
    timestamps: true
},{
    versionKey: false
})

const Ksink = mongoose.model('ksinks',schema)
module.exports = Ksink