let errorHandler = (error,_req,res,_next) => {
    res.status(500).json({
        success: false,
        error: error.message
    })
}

module.exports = errorHandler