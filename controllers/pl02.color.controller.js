const Color = require('../models/Color')

const controller = {

    create: async(req,res,next) => {
        try {
            await Color.create(req.body)
            return res.status(201).json({
                response: 'creado',
                success: true
            })
        } catch(error) {
            next(error)
        }
    },

    all: async(req,res,next) => {
        let query = {}
        if (req.query.cia) {
            query.company = req.query.cia
        }
        if (req.query.name) {
            query.name = new RegExp(req.query.name, 'i')
        }
        try {
            let all = await Color.find(query)
                .sort({name:'asc'})
                .populate("company","nameCompany")
            return res.status(200).json({
                response: { colors: all },
                success: true
            })
        }  catch(error) {
            next(error)
        }
    },

    one: async(req,res,next) => {
        try {
            let one = await Color.findById(req.params.id)
                .populate("company","nameCompany")
            if (one) {
                return res.status(200).json({
                    response: { color: one },
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
            let one = await Color.findOneAndUpdate(
                { _id: req.params.id },
                req.body,
                { new: true }
            ).populate("company","nameCompany")
            if (one) {
                return res.status(200).json({
                    response: { color: one },
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
            let one = await Color.findOneAndDelete({ _id: req.params.id })
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