const Note = require('../models/CodeNote')

const controller = {

    create: async(req,res,next) => {
        req.body.user = req.user._id
        try {
            let one = await Note.create(req.body)
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
        if (req.query.internal) {
            query.internal = new RegExp(req.query.internal, 'i')
        }
        try {
            let all = await Note.find(query)
                .populate("user", { nick: 1 })
                .populate({ path: "stock", populate: { path: 'plate', populate: { path: 'type', select: 'name' }}})
                .populate({ path: "stock", populate: { path: 'plate', populate: { path: 'color', select: 'name photo' }}})
                .populate({ path: "stock", populate: { path: 'plate', populate: { path: 'company', select: 'nameCompany' }}})
                .populate({ path: "stock", populate: { path: 'plate', populate: { path: 'state', select: 'state height heightSquare width widthSquare' }}})
                .populate({ path: "stock", populate: { path: 'plate', populate: { path: 'lastStates', select: 'state height heightSquare width widthSquare' }}})
                .populate({ path: "stock", populate: { path: 'sink', populate: { path: 'accesories', select: '-createdAt -updatedAt -__v', sort: { code: 1 }}}})
                .populate({ path: "stock", populate: { path: 'sink', populate: { path: 'jhonson', select: '-createdAt -updatedAt -__v' }}, select: '-createdAt -updatedAt -__v' })
                .sort({ internal: 'asc' })
            if (all?.length===0) {
                return res.status(200).json({
                    response: [],
                    success: false
                })
            }
            return res.status(200).json({
                response: all,
                success: true
            })
        } catch(error) {
            next(error)
        }
    },

    one: async(req,res,next) => {
        try {
            let onlyPlates = await Note.findById(req.params.id)
                .populate("user", { nick: 1 })
                .populate({ path: "stock", populate: { path: 'plate', populate: { path: 'type', select: 'name' }}})
                .populate({ path: "stock", populate: { path: 'plate', populate: { path: 'color', select: 'name photo' }}})
                .populate({ path: "stock", populate: { path: 'plate', populate: { path: 'company', select: 'nameCompany' }}})
                .populate({ path: "stock", populate: { path: 'plate', populate: { path: 'state', select: 'state height heightSquare width widthSquare' }}})
                .populate({ path: "stock",  populate: { path: 'plate', populate: { path: 'lastStates', select: 'state height heightSquare width widthSquare' }, match: { sink: null }, select: '-createdAt -updatedAt -__v' }})
            let onlySinks = await Note.findById(req.params.id)
                .populate("user", { nick: 1 })
                .populate({
                    path: "stock",
                    populate: {
                        path: 'sink',
                        populate: {
                            path: 'accesories',
                            select: '-createdAt -updatedAt -__v',
                            sort: { code: 1 }
                        }
                    },
                    select: '-createdAt -updatedAt -__v',
                    match: { plate: null }
                })
                .populate({
                    path: "stock",
                    populate: {
                        path: 'sink',
                        populate: {
                            path: 'jhonson',
                            select: '-createdAt -updatedAt -__v'
                        }
                    },
                    select: '-createdAt -updatedAt -__v',
                    match: { plate: null }
                })
            let response = {
                plates: [],
                sinks: []
            }
            if (onlyPlates?.length===0 && onlySinks?.length===0) {
                return res.status(200).json({
                    response,
                    success: false
                })
            }
            if (onlyPlates?.length>0) {
                response.plates = onlyPlates.stock
            }
            if (onlySinks?.length>0) {
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
        let one = {}
        try {
            if (req.query.action==='addid') {
                one = await Note.findOneAndUpdate(
                    { _id: req.params.id },
                    { $push: req.body },
                    { new: true }
                )
            }
            if (req.query.action==='delid') {
                one = await Note.findOneAndUpdate(
                    { _id: req.params.id },
                    { $pull: req.body },
                    { new: true }
                )
            }
            if (req.query.action==='upd') {
                one = await Note.findOneAndUpdate(
                    { _id: req.params.id },
                    { $pull: req.body },
                    { new: true }
                )
            }
            
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
            let one = await Note.findOneAndUpdate(
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
            let one = await Note.findOneAndDelete({ _id: req.params.id })
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
            let internal = await Note.find({ internal: all }).sort({ createdAt:-1 }).limit(1)
            let note = await Note.find({ note: all }).sort({ createdAt:-1 }).limit(1)
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