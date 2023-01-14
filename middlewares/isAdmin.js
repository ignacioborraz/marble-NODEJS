const defaultResponse = require("../config/defaultResponse")

module.exports = async(req,res,next) => {
    if (req.user.admin) {
        return next()
    }
    req.body.success = false
    req.body.sc = 401
    req.body.data = 'you are not allowed'
    return defaultResponse(req,res)
}