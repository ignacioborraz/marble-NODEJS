const mongoose = require('mongoose')

const schema = new mongoose.Schema ({
    sink: [{type: mongoose.Types.ObjectId , ref:'sinks', required:true}],
    internal: {type:String}, //cod interno de la placa
    note: {type:String}, //si está vendida, el cod se cambia por el n° de la nota de pedido
    done: {type:Boolean, required:true}, //las piletas entregadas pasan de false a true
    comments: {type:String},
    user: {type: mongoose.Types.ObjectId , ref:'users'}
})

const Stock = mongoose.model('stocks',schema)
module.exports = Stock