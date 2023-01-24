const mongoose = require('mongoose')

const schema = new mongoose.Schema ({
    state: {type:String, required:true}, //estado de nueva a escuadra/pedazo/retazo
    height: {type:Number, required:true}, //alto
    heightSquare: {type:Number}, //alto de escuadra
    width: {type:Number, required:true}, //ancho
    widthSquare: {type:Number}, //ancho de escuadra
    user: {type: mongoose.Types.ObjectId , ref:'users', required:true}
},{
    timestamps: true
},{
    versionKey: false
})

const State = mongoose.model('states',schema)
module.exports = State