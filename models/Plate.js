const mongoose = require('mongoose')

const schema = new mongoose.Schema ({
    lot: { type:String, required: true}, //lote de la placa según fabricante
    type: { type: mongoose.Types.ObjectId , ref:'types', required:true },
    color: { type: mongoose.Types.ObjectId , ref:'colors', required:true },
    state: { type: mongoose.Types.ObjectId , ref:'states', required:true }, //estado ultimo
    lastStates: [{ type: mongoose.Types.ObjectId , ref:'states', required:true }], //todos los estados
    company: { type: mongoose.Types.ObjectId , ref:'companies', required:true },
    stock: { type: Number, required: true }
},{
    timestamps: true
},{
    versionKey: false
})

const Plate = mongoose.model('plates',schema)
module.exports = Plate