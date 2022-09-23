const mongoose = require('mongoose')

const schema = new mongoose.Schema ({
    jhonson: {type: mongoose.Types.ObjectId , ref: 'jhonsons', required: true},
    acc: [{type: mongoose.Types.ObjectId , ref: 'accesories'}]
})

const Stock = mongoose.model('stocks',schema)
module.exports = Stock