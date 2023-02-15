const mongoose = require('mongoose')

const schema = new mongoose.Schema ({
    name: { type:String, required:true, unique: true },
    photo: { type:String, required:true },
    stock: { type:Number, required:true },
    description: { type:String, required:true }
},{
    timestamps: true
},{
    versionKey: false
})

const Acc = mongoose.model('accs',schema)
module.exports = Acc