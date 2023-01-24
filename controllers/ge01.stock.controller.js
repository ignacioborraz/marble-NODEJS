const Stock = require('../models/Stock')

const controller = {

    create: async(req,res,next) => {
        try {
            await Stock.create(req.body)
            return res.status(201).json({
                response: 'creado',
                success: true
            })
        } catch(error) {
            next(error)
        }
    },

    all: async(_req,res,next) => {
        try {
            let all = await Stock.find()
                .populate({path: "plate", populate: {path: 'type'}})
                .populate({path: "plate", populate: {path: 'color'}})
                .populate({path: "plate", populate: {path: 'state'}})
                .populate({path: "plate", populate: {path: 'lastStates'}})
                .populate({path: "plate", populate: {path: 'company'}})
                .populate({path: "sink", populate: {path: 'jhonson'}})
                .populate({path: "sink", populate: {path: 'accesories'}})
                .sort({ plate: 'asc' })
            return res.status(200).json({
                response: { accesories: all },
                success: true
            })
        } catch(error) {
            next(error)
        }
    },

    one: async(req,res,next) => {
        try {
            let one = await Stock.findById(req.params.id)
                .populate({path: "plate", populate: {path: 'type'}})
                .populate({path: "plate", populate: {path: 'color'}})
                .populate({path: "plate", populate: {path: 'state'}})
                .populate({path: "plate", populate: {path: 'lastStates'}})
                .populate({path: "plate", populate: {path: 'company'}})
                .populate({path: "sink", populate: {path: 'jhonson'}})
                .populate({path: "sink", populate: {path: 'accesories'}})
            if (one) {
                return res.status(200).json({
                    response: { stock: one },
                    success: true
                })    
            }
            return res.status(404).json({
                response: 'no encontrado',
                success: false
            })
        } catch(error) {
            next(error)
        }
    },

    update: async(req,res,next) => {
        try {
            let one = await Stock.findOneAndUpdate(
                { _id: req.params.id },
                req.body,
                { new: true }
            )
            if (one) {
                return res.status(200).json({
                    response: { stock: one },
                    success: true
                })    
            }
            return res.status(404).json({
                response: 'no encontrado',
                success: false
            })
        } catch(error) {
            next(error)
        }
    },

    destroy: async(req,res,next) => {
        try {
            let one = await Stock.findOneAndDelete({ _id: req.params.id })
            if (one) {
                return res.status(200).json({
                    response: 'eliminado',
                    success: true
                })    
            }
            return res.status(404).json({
                response: 'no encontrado',
                success: false
            })
        } catch(error) {
            next(error)
        }
    }
    
}

module.exports = controller