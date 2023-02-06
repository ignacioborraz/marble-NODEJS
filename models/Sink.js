const mongoose = require('mongoose')

const schema = new mongoose.Schema ({
    jhonson: { type: mongoose.Types.ObjectId , ref: 'jhonsons' },
    accesories: [{ type: mongoose.Types.ObjectId , ref: 'accesories' }],
    instalation: [{ type: String, enum: ['monocomando','dosificador','tres agujeros','inferior'] }],
    done: { type: Boolean, required: true} , //las piletas entregadas pasan de false a true
    user: { type: mongoose.Types.ObjectId , ref:'users' }
},{
    timestamps: true
},{
    versionKey: false
})

const Sink = mongoose.model('sinks',schema)
module.exports = Sink