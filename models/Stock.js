const mongoose = require('mongoose')

const schema = new mongoose.Schema ({
    plates: [{type: mongoose.Types.ObjectId , ref:'plates'}],
    sinks: [{type: mongoose.Types.ObjectId , ref:'sinks'}]
})

const Stock = mongoose.model('stocks',schema)
module.exports = Stock