function addProps(req,res,next) {
    req.body.user = req.user._id
    req.body.done= false
    return next()
}

module.exports = addProps