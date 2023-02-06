const Stock = require('../models/Stock')
const Sink = require('../models/Sink')

const controller = {

    create: async(req,res,next) => {
        try {
            let one = await Stock.create(req.body)
            return res.status(201).json({
                response: one._id,
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
                .populate({path: "plate", populate: ['type','color','state','lastStates','company']})
                .populate({path: "sink", populate: {path: ['jhonson','accesories']}})
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
        let data_stock = {}
        let data_sink = {}
        if (req.body.upd_stock) {
            data_stock.stock = req.body.upd_stock
        }
        if (req.body.upd_jhonson) {
            data_sink.jhonson = req.body.upd_jhonson
        }
        if (req.body.upd_accesories) {
            data_sink.accesories = req.body.upd_accesories
        }
        if (req.body.upd_instalation) {
            data_sink.instalation = req.body.upd_instalation
        }
        try {
            let sink = await Sink.findOneAndUpdate(
                { _id: req.body.id_sink },
                data_sink,
                { new: true }
            )
            let one = await Stock.findOneAndUpdate(
                { _id: req.params.id },
                data_stock,
                { new: true }
            ).populate({path: "plate", populate: ['type','color','state','lastStates','company']})
            .populate({path: "sink", populate: ['jhonson','accesories']}).select('stock sink plate')
            if (one && sink) {
                return res.status(200).json({
                    response: one,
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