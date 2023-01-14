const mongoose = require('mongoose')

const userSchema = new mongoose.Schema ({
    nick: {type:String, required:true},
    photo: {type:String, required:true},
    password: {type:String, required:true},
    admin: {type:Boolean, required:true}
})

const User = mongoose.model('users',userSchema)
module.exports = User

