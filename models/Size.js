const mongoose = require('mongoose')

const sizeSchema = new mongoose.Schema ({
    type: {type:String, required:true}, //tipo
    height: {type:Number, required:true}, //alto
    heightSquare: {type:Number}, //alto de escuadra
    width: {type:Number, required:true}, //ancho
    widthSquare: {type:Number}, //ancho de escuadra
    thickness: {type:Number, required:true}, //espesor
    state: { //estado de la placa (va a cambiar de entera a escuadra o retazo o usada al 100%)
        state:{type:String},
        date: {type: Date}
    },
    comments: {type:String}
})

const Size = mongoose.model('sizes',sizeSchema)
module.exports = Size

