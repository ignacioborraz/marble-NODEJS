const mongoose = require('mongoose')

const schema = new mongoose.Schema ({
    code: {type:String, required:true},
    photo: {type:String, required:true},
    description: {type:String, required:true}
},{
    timestamps: true
},{
    versionKey: false
})

const Acc = mongoose.model('accesories',schema)
module.exports = Acc