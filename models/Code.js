const mongoose = require('mongoose')

const schema = new mongoose.Schema ({
    internal: {type:String}, //cod interno de la placa
    note: {type:String}, //si está vendida, el cod se cambia por el n° de la nota de pedido
    stock: [{type: mongoose.Types.ObjectId , ref:'stocks', require:true}],
    user: {type: mongoose.Types.ObjectId , ref:'users', require:true},
    comments: {type:String},
    done: {type:Boolean, required:true}
},{
    versionKey: false
})

const Code = mongoose.model('codes',schema)
module.exports = Code