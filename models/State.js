const mongoose = require('mongoose')

const stateSchema = new mongoose.Schema ({
    state: {type:String, required:true}, //estado de nueva a escuadra/pedazo/retazo
    date: {type: Date}, //fecha
    height: {type:Number, required:true}, //alto
    heightSquare: {type:Number}, //alto de escuadra
    width: {type:Number, required:true}, //ancho
    widthSquare: {type:Number}, //ancho de escuadra
})

const Plate = mongoose.model('states',stateSchema)
module.exports = Plate

