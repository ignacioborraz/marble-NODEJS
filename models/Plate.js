const mongoose = require('mongoose')

const plateSchema = new mongoose.Schema ({
    lot: {type:String, },
    type: {type: mongoose.Types.ObjectId , ref:'types'},
    color: {type: mongoose.Types.ObjectId , ref:'colors'},
    state: [{type: mongoose.Types.ObjectId , ref:'states'}],
    company: {type: mongoose.Types.ObjectId , ref:'companies'},
    comments: {type:String}
})

const Plate = mongoose.model('plates',plateSchema)
module.exports = Plate

