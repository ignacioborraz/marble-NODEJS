const mongoose = require('mongoose')

const schema = new mongoose.Schema ({
    number_code: { type: Number, require:true }, //no tiene que ser unica porque se busca por numero de de orden (interna o pedido)
    stock: { type: Number, require:true },
    plate: { type: mongoose.Types.ObjectId , ref:'plates' },
    ksink: { type: mongoose.Types.ObjectId , ref:'ksinks' },
    instalation: [{ type: String, enum: ['monocomando','dosificador','tres agujeros','inferior'] }],
    accesory: [{ type: mongoose.Types.ObjectId , ref:'accs' }],
    comments: { type:String },
    client: { type: mongoose.Types.ObjectId , ref:'clients', require:true },
    internal: { type:Boolean, required:true }, //si es interno o pedido
    done: { type:Boolean, required:true }, //si se entregó
    user: { type: mongoose.Types.ObjectId , ref:'users', require:true }
},{
    timestamps: true
},{
    versionKey: false
})

const Note = mongoose.model('notes',schema)
module.exports = Note