const mongoose = require('mongoose')

const plateSchema = new mongoose.Schema ({
    name: {type:String, required:true}, //nombre
    photo: {type:String, required:true}, //foto
    size: [{type: mongoose.Types.ObjectId , ref:'sizes'},],
    lot: {type:String, required:true}, //lote de la placa
    //client: {type: mongoose.Types.ObjectId , ref:'clients'},
    company: {type: mongoose.Types.ObjectId , ref:'companies'},
})

const Plate = mongoose.model('plates',plateSchema)
module.exports = Plate

