const Type = require('../models/Type')

const controller = {

    create: async(req,res,next) => {
        try {
            await Type.create(req.body)
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
        try {
            let all = await Type.find(query)
                .sort({name:'asc'})
                .populate("company","nameCompany")
            return res.status(200).json({
                response: { types: all },
                success: true
            })
        }  catch(error) {
            next(error)
        }
    },

    one: async(req,res,next) => {
        try {
            let one = await Type.findById(req.params.id)
                .populate("company","nameCompany")
            if (one) {
                return res.status(200).json({
                    response: { type: one },
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
            let one = await Type.findOneAndUpdate(
                { _id: req.params.id },
                req.body,
                { new: true }
            ).populate("company","nameCompany")
            if (one) {
                return res.status(200).json({
                    response: { type: one },
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
            let one = await Type.findOneAndDelete({ _id: req.params.id })
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