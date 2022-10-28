const mongoose = require('mongoose')

const schema = new mongoose.Schema ({
    stock: {type:Number, required:true},
    plate: {type: mongoose.Types.ObjectId , ref:'plates'}, //o una
    sink: {type: mongoose.Types.ObjectId , ref:'sinks'}, //o la otra
    //por mas que se relacionen y capaz el stock es el mismo para todos... en el peor de los casos NO (y puede suceder)
})

const Stock = mongoose.model('stocks',schema)
module.exports = Stock