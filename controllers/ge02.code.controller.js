const Code = require('../models/Code')

const controller = {

    create: async(req,res,next) => {
        req.body.user = req.user._id
        req.body.done = false
        //console.log(req.body)
        if (req.body.note) {
            req.body.internal = null
        }
        if (req.body.internal) {
            req.body.note = null
        }
        try {
            let one = await Code.create(req.body)
            return res.status(201).json({
                response: one._id,
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
            let onlyPlates = await Code.findById(req.params.id)
                .populate("user", {nick: 1})
                .populate({path: "stock", populate: {path: 'plate', populate: {path: 'type', select: 'name'}}})
                .populate({path: "stock", populate: {path: 'plate', populate: {path: 'color', select: 'name photo'}}})
                .populate({path: "stock", populate: {path: 'plate', populate: {path: 'company', select: 'nameCompany'}}})
                .populate({path: "stock", populate: {path: 'plate', populate: {path: 'state', select: 'state height heightSquare width widthSquare'}}})
                .populate({path: "stock", select: '-createdAt -updatedAt -__v', match: { sink: null }, populate: {path: 'plate', populate: {path: 'lastStates', select: 'state height heightSquare width widthSquare'}}})
            let onlySinks = await Code.findById(req.params.id)
                .populate("user", {nick: 1})
                .populate({
                    path: "stock",
                    select: '-createdAt -updatedAt -__v',
                    match: { plate: null },
                    populate: {
                        path: 'sink',
                        populate: {
                            path: 'accesories',
                            select: '-createdAt -updatedAt -__v',
                            sort: {code: 1}
                        }
                    }
                })
                .populate({
                    path: "stock",
                    select: '-createdAt -updatedAt -__v',
                    match: { plate: null },
                    populate: {
                        path: 'sink',
                        populate: {
                            path: 'jhonson',
                            select: '-createdAt -updatedAt -__v'
                        }
                    }
                })
            let response = {
                plates: [],
                sinks: []
            }
            if (onlyPlates?.length===0 && onlySinks?.length===0) {
                return res.status(404).json({
                    response,
                    success: false
                })
            }
            if (onlyPlates) {
                response.plates = onlyPlates.stock
            }
            if (onlySinks) {
                response.sinks = onlySinks.stock
            }
            return res.status(200).json({
                response,
                success: true
            })            
        } catch(error) {
            next(error)
        }
    },

    update: async(req,res,next) => {
        try {
            let one = await Code.findOneAndUpdate(
                { _id: req.params.id },
                { $push: req.body },
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

    pullData: async(req,res,next) => {
        try {
            let one = await Code.findOneAndUpdate(
                { _id: req.params.id },
                { $pull: req.body },
                { new: true }
            )
            if (one) {
                return res.status(200).json({
                    response: req.body,
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
    },

    next: async(req,res,next) => {
        let all = new RegExp("", 'i')
        try {
            let internal = await Code.find({ internal: all }).sort({ createdAt:-1 }).limit(1)
            let note = await Code.find({ note: all }).sort({ createdAt:-1 }).limit(1)
            let response = {
                codes: {
                    internal: 1,
                    note: 1
                }
            }
            if (internal.length > 0) {
                response.codes.internal = Number(internal[0].internal)+1
            }
            if (note.length > 0) {
                response.codes.note = Number(note[0].note)+1
            }
            return res.status(200).json({
                response,
                success: true
            })
        } catch(error) {
            next(error)
        }
    },
    
}

module.exports = controller