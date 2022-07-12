const mongoose = require('mongoose')

const plateSchema = new mongoose.Schema ({
    name: {type:String, required:true}, //nombre
    type: {type:String, required:true}, //tipo
    photo: {type:String, required:true}, //foto
    height: {type:Number, required:true}, //alto
    heightSquare: {type:Number, required:true}, //alto de escuadra
    width: {type:Number, required:true}, //ancho
    widthSquare: {type:Number, required:true}, //ancho de escuadra
    thickness: {type:Number, required:true}, //espesor
    lot: {type:String, required:true}, //lote de la placa
    state: {type:String, required:true}, //estado de la placa (va a cambiar de entera a escuadra o retazo o usada al 100%)
    //client: {type: mongoose.Types.ObjectId , ref:'clients'},
    company: {type: mongoose.Types.ObjectId , ref:'companies'},
})

const Plate = mongoose.model('plates',plateSchema)
module.exports = Plate

