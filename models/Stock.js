const mongoose = require('mongoose')

const schema = new mongoose.Schema ({
    sink: [{type: mongoose.Types.ObjectId , ref:'sinks', required:true}],
    internal: {type:String}, //cod interno de la placa
    note: {type:String}, //si está vendida, el cod se cambia por el n° de la nota de pedido
})

const Stock = mongoose.model('stocks',schema)
module.exports = Stock