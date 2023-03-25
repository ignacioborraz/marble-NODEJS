const Note = require('../models/Note')
const Plate = require('../models/Plate')
const Ksink = require('../models/Ksink')
const Acc = require('../models/Acc')
const Client = require('../models/Client')

const controller = {

    create: async(req,res,next) => {
        //console.log(req.body)
        let response = true
        try {
            if(req.body.internal) {
                if (req.body.plate) {
                    let upd = await Plate.findById(req.body.plate)
                    upd.stock = upd.stock + req.body.stock
                    await upd.save()    
                }
                if (req.body.ksink) {
                    let upd = await Ksink.findById(req.body.ksink)
                    upd.stock = upd.stock + req.body.stock
                    await upd.save()
                }
                if (req.body.accesory) {
                    let upd = await Acc.findById(req.body.accesory)
                    upd.stock = upd.stock + req.body.stock
                    await upd.save()
                }
            } else {
                if (req.body.plate) {
                    let upd = await Plate.findById(req.body.plate)
                    upd.stock = upd.stock - req.body.stock
                    await upd.save()
                }
                if (req.body.ksink) {
                    let upd = await Ksink.findById(req.body.ksink)
                    upd.stock = upd.stock - req.body.stock
                    await upd.save()
                }
                if (req.body.accesory.length) {
                    for (let acc of req.body.accesory) {
                        let upd = await Acc.findById(acc)
                        if (upd.stock===0) {
                            response = `ATENCION: no hay stock de ${upd.name}`
                        } else if (upd.stock<req.body.stock) {
                            req.body.stock = upd.stock
                            upd.stock = 0
                            response = `ATENCION: sólo hay ${req.body.stock} de ${upd.name}`
                            await upd.save()
                        } else {
                            upd.stock = upd.stock - req.body.stock
                            await upd.save()
                        }
                    }
                }
                await Note.create(req.body)
                return res.status(201).json({
                    response,
                    success: true
                })
            }

        } catch(error) {
            next(error)
        }
    },

    all: async(req,res,next) => {
        let query ={}
        let order = {}
        if (req.query.type==='internal') {
            query.internal = true
            order.internal = 'asc'
            if (req.query.text) {
                query.internal = new RegExp(req.query.text, 'i')
            }
        }
        if (req.query.type==='note') {
            query.note = null
            query.done = false
            order.note = 'asc'
        }
        if (req.query.type==='done') {
            query.done = true
        }
        if (req.query.numbers) {
            query.number_code = new RegExp(req.query.numbers, 'i')
        }
        if (req.query.comments) {
            query.comments = new RegExp(req.query.comments, 'i')
        }
        try {
            let all = await Note.find(query).populate('client','name -_id')
            let number_codes = [...(new Set(all.map(each => each.number_code)))]
            let data = number_codes.map(number_code => {
                let products = all.filter(one => one.number_code === number_code).length                
                let client = all.find(one => one.number_code === number_code).client.name
                return { number_code,products,client }
            })
            if (data?.length===0) {
                return res.status(200).json({
                    response: [],
                    success: false
                })
            }
            return res.status(200).json({
                response: data,
                success: true
            })
        } catch(error) {
            next(error)
        }
    },

    one: async(req,res,next) => {
        const { number_code } = req.params
        try {
            let onlyPlates = await Note.find({ number_code, ksink: null }, '-ksink -instalation -accesory -createdAt -updatedAt -__v')
                .populate('user','nick -_id')
                .populate('client','name -_id')
                .populate({
                    path: 'plate',
                    populate: { path: 'type', select: 'name' }
                })
                .populate({
                    path: 'plate',
                    populate: { path: 'color', select: 'name photo' }
                })
                .populate({
                    path: 'plate',
                    populate: {path: 'company', select: 'nameCompany'}
                })
                .populate({
                    path: 'plate',
                    populate: {path: 'state', select: 'state height heightSquare width widthSquare'},
                    select: '-createdAt -updatedAt -__v'
                })
                .populate({
                    path: 'plate',
                    populate: {path: 'lastStates', select: 'state height heightSquare width widthSquare'},
                    select: '-createdAt -updatedAt -__v'
                })
            let onlySinks = await Note.find({ number_code, plate: null },'-plate -createdAt -updatedAt -__v')
                .populate('user','nick -_id')
                .populate('client','name -_id')
                .populate({
                    path: 'ksink',
                    select: 'name photo instalation stock',
                    sort: {order: 1}
                })
                .populate({
                    path: 'accesory',
                    select: 'name photo stock',
                    sort: {name: 1}
                })
/*                 .populate({
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
                }) */
                
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
                response.plates = onlyPlates
            }
            if (onlySinks) {
                response.sinks = onlySinks
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
            let note = await Note.findOne({ _id: req.params.id })
            let old_stock = note.stock
            let old_accesories = note.accesory
            let one = await Note.findOneAndUpdate(
                { _id: req.params.id },
                req.body,
                { new: true }
            )
            if (one) {
                if (Number(one.stock) === Number(old_stock)) {
                    //console.log({ old_accesories,news:one.accesory })
                    if (one.accesory) {
                        for (let each of one.accesory) {
                            if (!old_accesories.includes(each)) {
                                let accesory = await Acc.findById(each)
                                accesory.stock = accesory.stock - Number(one.stock)
                                await accesory.save()
                            }
                        }
                        for (let each of old_accesories) {
                            if (!one.accesory.includes(each)) {
                                let accesory = await Acc.findById(each)
                                accesory.stock = accesory.stock + Number(one.stock)
                                await accesory.save()
                            }
                        }
                    }
                } else {
                    if (one.ksink) {
                        let ksink = await Ksink.findById(one.ksink)
                        ksink.stock = ksink.stock - (Number(one.stock) - Number(old_stock))
                        await ksink.save()
                    }
                    if (one.accesory) {
                        for (let each of one.accesory) {
                            let accesory = await Acc.findById(each)
                            if (!old_accesories.includes(each)) {
                                accesory.stock = accesory.stock - Number(one.stock)
                            } else {
                                accesory.stock = accesory.stock - (Number(one.stock) - Number(old_stock))
                            }
                            await accesory.save()
                        }
                        for (let each of old_accesories) {
                            let accesory = await Acc.findById(each)
                            if (!one.accesory.includes(each)) {
                                accesory.stock = accesory.stock + Number(old_stock)
                            }
                            await accesory.save()
                        }
                    }
                }
                return res.status(200).json({
                    response: 'modificado',
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

    pushData: async(req,res,next) => {
        try {
            let one = await Note.findOneAndUpdate(
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
        try {
            let response = {
                internal: 1,
                note: 1
            }
            let internal = await Note.find({ internal: true }).sort({ createdAt:-1 }).limit(1)
            //console.log(internal[0]?.number_code)
            let note = await Note.find({ internal: false }).sort({ createdAt:-1 }).limit(1)
            //console.log(note[0]?.number_code)
            if (internal.length) {
                response.internal = Number(internal[0].number_code)+1
            }
            if (note.length) {
                response.note = Number(note[0].number_code)+1
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