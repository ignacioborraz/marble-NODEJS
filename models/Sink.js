const mongoose = require('mongoose')

const schema = new mongoose.Schema ({
    internal: {type:String}, //cod interno de la placa
    note: {type:String}, //si está vendida, el cod se cambia por el n° de la nota de pedido
    jhonson: {type: mongoose.Types.ObjectId , ref:'jhonsons'},
    accesories: [{type: mongoose.Types.ObjectId , ref:'accesories'}],
    done: {type:Boolean, required:true}, //las piletas entregadas pasan de false a true
    comments: {type:String}
})

const Sink = mongoose.model('sinks',schema)
module.exports = Sink