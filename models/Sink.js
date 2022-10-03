const mongoose = require('mongoose')

const schema = new mongoose.Schema ({
    jhonson: {type: mongoose.Types.ObjectId , ref:'jhonsons'},
    accesories: [{type: mongoose.Types.ObjectId , ref:'accesories'}],
    quantity: {type:Number},
    instalation: [{type:String}],
    user: {type: mongoose.Types.ObjectId , ref:'users'}
})

const Sink = mongoose.model('sinks',schema)
module.exports = Sink