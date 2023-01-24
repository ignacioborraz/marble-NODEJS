const Code = require('../models/Code')

const controller = {

    create: async(req,res,next) => {
        try {
            await Code.create(req.body)
            return res.status(201).json({
                response: 'creado',
                success: true
            })
        } catch(error) {
            next(error)
        }
    },

    all: async(req,res,next) => {
        let query ={}
        let order = {}
        if (req.query.internal) {
            if (req.query.internal === 'true') {
                query.note = null
                query.done = false
            } else {
                query.internal = new RegExp(req.query.internal, 'i')
            }
            order.internal = 'asc'
        }
        if (req.query.note) {
            if (req.query.note === 'true') {
                query.internal = null
                query.done = false
            } else {
                query.note = new RegExp(req.query.note, 'i')
            }
            order.note = 'asc'
        }
        if (req.query.done) {
            query.done = req.query.done
        }
        try {
            let all = await Code.find(query).sort({code: 'asc'})
                .populate("user", {nick: 1})    
                .populate({path: "stock", populate: {path: 'plate', populate: {path: 'type'}}})
                .populate({path: "stock", populate: {path: 'plate', populate: {path: 'color'}}})
                .populate({path: "stock", populate: {path: 'plate', populate: {path: 'type'}}})
                .populate({path: "stock", populate: {path: 'plate', populate: {path: 'state'}}})
                .populate({path: "stock", populate: {path: 'plate', populate: {path: 'lastStates'}}})
                .populate({path: "stock", populate: {path: 'plate', populate: {path: 'company'}}})
                .populate({path: "stock", populate: {path: 'sink', populate: {path: 'jhonson'}}})
                .populate({path: "stock", populate: {path: 'sink', populate: {path: 'accesories'}}})
                .sort(order)
            return res.status(200).json({
                response: { codes: all },
                success: true
            })
        } catch(error) {
            next(error)
        }
    },

    one: async(req,res,next) => {
        try {
            let one = await Code.findById(req.params.id)
                .populate("user", {nick: 1})    
                .populate({path: "stock", populate: {path: 'plate', populate: {path: 'type'}}})
                .populate({path: "stock", populate: {path: 'plate', populate: {path: 'color'}}})
                .populate({path: "stock", populate: {path: 'plate', populate: {path: 'type'}}})
                .populate({path: "stock", populate: {path: 'plate', populate: {path: 'state'}}})
                .populate({path: "stock", populate: {path: 'plate', populate: {path: 'lastStates'}}})
                .populate({path: "stock", populate: {path: 'plate', populate: {path: 'company'}}})
                .populate({path: "stock", populate: {path: 'sink', populate: {path: 'jhonson'}}})
                .populate({path: "stock", populate: {path: 'sink', populate: {path: 'accesories'}}})
            if (one) {
                return res.status(200).json({
                    response: { code: one },
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
            let one = await Code.findOneAndUpdate(
                { _id: req.params.id },
                req.body,
                { new: true }
            )
            if (one) {
                return res.status(200).json({
                    response: { code: one },
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
            let one = await Code.findOneAndDelete({ _id: req.params.id })
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