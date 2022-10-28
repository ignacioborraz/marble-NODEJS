const mongoose = require('mongoose')

const plateSchema = new mongoose.Schema ({
    lot: {type:String, required: true}, //lote de la placa según fabricante
    internal: {type:String}, //cod interno de la placa
    note: {type:String}, //si está vendida, el cod se cambia por el n° de la nota de pedido
    type: {type: mongoose.Types.ObjectId , ref:'types', required:true},
    color: {type: mongoose.Types.ObjectId , ref:'colors', required:true},
    state: {type: mongoose.Types.ObjectId , ref:'states', required:true}, //estado ultimo
    lastStates: [{type: mongoose.Types.ObjectId , ref:'states', required:true}], //todos los estados
    company: {type: mongoose.Types.ObjectId , ref:'companies', required:true},
    done: {type:Boolean, required:true}, //las piletas entregadas pasan de false a true
})

const Plate = mongoose.model('plates',plateSchema)
module.exports = Plate

