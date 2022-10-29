const Code = require('../models/Code')

const controller = {

    create: async(req,res,next) => {
        req.body.user = req.user.id
        try {
            let code = await new Code(req.body).save()
            res.status(201).json({
                id: code._id,
                messagge: 'ok',
                success: true
            })
        } catch(errorDeCatcheo) {
            next(errorDeCatcheo)
        }
    },

    all: async(req,res,next) => {
        let query ={}
        if (req.query.internal) {
            if (req.query.internal === 'true') {
                query.note = null
                query.done = false
            } else {
                query.internal = new RegExp(req.query.internal, 'i')
            }
        }
        if (req.query.note) {
            if (req.query.note === 'true') {
                query.internal = null
                query.done = false
            } else {
                query.note = new RegExp(req.query.note, 'i')
            }
        }
        if (req.query.done) {
            query.done = req.query.done
        }
        try {
            let codes = await Code.find(query).sort({code: 'asc'})
                .populate("user", {nick: 1})    
                .populate({path: "stock", populate: {path: 'plate', populate: {path: 'type'}}})
                .populate({path: "stock", populate: {path: 'plate', populate: {path: 'color'}}})
                .populate({path: "stock", populate: {path: 'plate', populate: {path: 'type'}}})
                .populate({path: "stock", populate: {path: 'plate', populate: {path: 'state'}}})
                .populate({path: "stock", populate: {path: 'plate', populate: {path: 'lastStates'}}})
                .populate({path: "stock", populate: {path: 'plate', populate: {path: 'company'}}})
                .populate({path: "stock", populate: {path: 'sink', populate: {path: 'jhonson'}}})
                .populate({path: "stock", populate: {path: 'sink', populate: {path: 'accesories'}}})
            if (codes) {
                res.status(200).json({
                    response: codes,
                    success: true
                })
            } else {
                res.status(404).json({
                    messagge: 'no se encontraron coincidencias',
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
            let code = await Code.findOne({_id:id})
                .populate("user", {nick: 1})    
                .populate({path: "stock", populate: {path: 'plate', populate: {path: 'type'}}})
                .populate({path: "stock", populate: {path: 'plate', populate: {path: 'color'}}})
                .populate({path: "stock", populate: {path: 'plate', populate: {path: 'type'}}})
                .populate({path: "stock", populate: {path: 'plate', populate: {path: 'state'}}})
                .populate({path: "stock", populate: {path: 'plate', populate: {path: 'lastStates'}}})
                .populate({path: "stock", populate: {path: 'plate', populate: {path: 'company'}}})
                .populate({path: "stock", populate: {path: 'sink', populate: {path: 'jhonson'}}})
                .populate({path: "stock", populate: {path: 'sink', populate: {path: 'accesories'}}})
            if (code) {
                res.status(200).json({
                    response: code,
                    success: true
                })
            } else {
                res.status(404).json({
                    messagge: 'no se encontraron coincidencias',
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
            let stock = await Code.findOneAndUpdate({_id:id},req.body,{new: true})
            if (stock) {
                res.status(200).json({
                    messagge: 'codigo modificado',
                    success: true
                })
            } else {
                res.status(404).json({
                    messagge: 'no se encontraron coincidencias',
                    success: true
                })
            }
        } catch(errorDeCatcheo) {
            next(errorDeCatcheo)
        }
    },

    destroy: async(req,res) => {
        let {id} = req.params
        try {
            let stock = await Code.findOneAndDelete({_id:id})
            if (stock) {
                res.status(200).json({
                    messagge: 'codigo eliminado',
                    success: true
                })
            } else {
                res.status(404).json({
                    messagge: 'no se encontraron coincidencias',
                    success: true
                })
            }
        } catch(errorDeCatcheo) {
            next(errorDeCatcheo)
        }
    }
    
}

module.exports = controller