const Stock = require('../models/Stock')

const controller = {

    create: async(req,res,next) => {
        req.body.user = req.user.id
        try {
            let stock = await new Stock(req.body).save()
            res.status(201).json({
                id: stock._id,
                message: 'ok',
                success: true
            })
        } catch(errorDeCatcheo) {
            next(errorDeCatcheo)
        }
    },

    get: async(_req,res,next) => {
        try {
            let stocks = await Stock.find()
                .populate({path: "plate", populate: {path: 'type'}})
                .populate({path: "plate", populate: {path: 'color'}})
                .populate({path: "plate", populate: {path: 'state'}})
                .populate({path: "plate", populate: {path: 'lastStates'}})
                .populate({path: "plate", populate: {path: 'company'}})
                .populate({path: "sink", populate: {path: 'jhonson'}})
                .populate({path: "sink", populate: {path: 'accesories'}})
            if (stocks) {
                res.status(200).json({
                    response: stocks,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: 'no se encontraron coincidencias',
                    success: true
                })
            }
        } catch(errorDeCatcheo) {
            next(errorDeCatcheo)
        }
    },

    one: async(req,res,next) => {
        let {id} = req.params
        try {
            let stock = await Stock.findOne({_id:id})
                .populate({path: "plate", populate: {path: 'type'}})
                .populate({path: "plate", populate: {path: 'color'}})
                .populate({path: "plate", populate: {path: 'state'}})
                .populate({path: "plate", populate: {path: 'lastStates'}})
                .populate({path: "plate", populate: {path: 'company'}})
                .populate({path: "sink", populate: {path: 'jhonson'}})
                .populate({path: "sink", populate: {path: 'accesories'}})
            if (stock) {
                res.status(200).json({
                    response: stock,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: 'no se encontraron coincidencias',
                    success: true
                })
            }
        } catch(errorDeCatcheo) {
            next(errorDeCatcheo)
        }
    },

    put: async(req,res,next) => {
        let {id} = req.params
        try {
            let stock = await Stock.findOneAndUpdate({_id:id},req.body,{new: true})
            if (stock) {
                res.status(200).json({
                    message: 'pedido modificado',
                    success: true
                })
            } else {
                res.status(404).json({
                    message: 'no se encontraron coincidencias',
                    success: true
                })
            }
        } catch(errorDeCatcheo) {
            next(errorDeCatcheo)
        }
    },

    destroy: async(req,res,next) => {
        let {id} = req.params
        try {
            let stock = await Stock.findOneAndDelete({_id:id})
            if (stock) {
                res.status(200).json({
                    message: 'pedido eliminado',
                    success: true
                })
            } else {
                res.status(404).json({
                    message: 'no se encontraron coincidencias',
                    success: true
                })
            }
        } catch(errorDeCatcheo) {
            next(errorDeCatcheo)
        }
    }
    
}

module.exports = controller