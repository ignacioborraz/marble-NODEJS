const User = require('../models/User.js')
const defaultResponse = require("../config/defaultResponse")

async function accountExistsSignIn(req,res,next) {
    const user = await User.findOne({mail: req.body.mail})
    if (user) {
        req.user = {
            _id: user._id,
            nick: user.nick,
            photo: user.photo,
            password: user.password,
            admin: user.is_admin,
            online: true
        }
        return next() //continuo con el middleware o metodo programado en la ruta
    }
    req.body.success = false
    req.body.sc = 400
    req.body.data = 'usuario no existe'
    return defaultResponse(req,res)
}
module.exports = accountExistsSignIn