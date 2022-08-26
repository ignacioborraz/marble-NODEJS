const mongoose = require('mongoose')

const userSchema = new mongoose.Schema ({
    nick: {type:String, required:true},
    photo: {type:String, required:true},
    password: {type:Array, required:true},
    role: {type:String, required:true}
})

const User = mongoose.model('users',userSchema)
module.exports = User

