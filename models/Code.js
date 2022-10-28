const mongoose = require('mongoose')

const schema = new mongoose.Schema ({
    internal: {type:String}, //cod interno de la placa
    note: {type:String}, //si está vendida, el cod se cambia por el n° de la nota de pedido
    plates: [{type: mongoose.Types.ObjectId , ref:'plates'}],
    stocks: [{type: mongoose.Types.ObjectId , ref:'stocks'}],    
    done: {type:Boolean, required:true}, //las piletas entregadas pasan de false a true
    comments: {type:String},
    user: {type: mongoose.Types.ObjectId , ref:'users'}
})

const Code = mongoose.model('codes',schema)
module.exports = Code