function addProps(req,res,next) {
    req.body.data = req.body.data.map(each => {
        each.number_code = req.body.number_code
        each.comments = req.body.comments
        each.client = req.body.client
        each.internal = req.body.internal
        each.done = false
        each.user = req.user._id
        return each
    })
    delete req.body.comments
    delete req.body.client
    delete req.user
    return next()
}

module.exports = addProps