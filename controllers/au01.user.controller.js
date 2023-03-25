const User = require('../models/User')
const response = require('../config/defaultResponse')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userControllers = {

    signUp: async (req,res) => {
        const {nick, photo, password, admin, online} = req.body
        try {
            const user = await User.findOne({nick})
            if (!user) {
                try {
                    let hashWord = bcryptjs.hashSync(password, 10)
                    await new User({nick, photo, password: hashWord, admin, online}).save()
                    res.json({
                        success: true, 
                        message: 'usuario creado'
                    }) 
                } catch (error) {
                    console.error(error)
                    res.json({
                        success: false,
                        message: 'no se pudo realizar la acción'
                    })
                }                
            } else {
                res.json({
                    success: false,
                    message: 'usuario ya existe'
                })
            }
        } catch (error) {
            console.error(error)
            res.json({
                success: false,
                message: 'no se pudo realizar la acción'
            })
        }
    },

    signin: async (req, res, next) => {
        let { password } = req.body
        let { user } = req
        try {
            const verified = bcryptjs.compareSync(password, user.password)
            if(verified) {
                await User.findOneAndUpdate({ _id: user._id },{ online: true },{ new: true })
                let token = jwt.sign(
                    { id: user._id },
                    process.env.SECRET_KEY,
                    { expiresIn: 60*60*24*7 }
                )
                user = {
                    nick: user.nick,
                    photo: user.photo,
                    admin: user.admin
                }
                req.body.success = true
                req.body.sc = 200
                req.body.data = { user,token }
                return response(req,res)
            }
                req.body.success = false
                req.body.sc = 400
                req.body.data = 'verificar datos'                
            return response(req,res)
        } catch (error) {
            next(error)
        }
    },

    signOut: async (req, res, next) => {
        const {id} = req.body
        try {
            await User.findOneAndUpdate({ _id: id },{ online: false },{ new: true })
            res.json({
                success: true,
                message: 'hasta pronto!'})
        } catch (error) {
            next(error)
        }
    },

    verifyToken:(req, res) => {
        const user = {
            id: req.user._id,
            nick: req.user.nick,
            photo: req.user.photo,
            role: req.user.role}
        if (!req.err) {
        res.json({
            success: true,
            response: {user},
            message: 'bienvenid@ '+user.nick})
        } else {
            res.json({
                success:false,
                message:'inicia sesión'}) 
        }
    },
    
    getUsers: async(req,res) => {
        let error = null
        try {
            let users = await User.find()
            users = users.map(user => { 
                user = {
                    id: user._id,
                    nick: user.nick,
                    photo: user.photo,
                    role: user.role
                }
                return user
            })
            res.json({
                success: true,
                response: {users}
            })
        } catch(errorDeCatcheo) {
            error=errorDeCatcheo
            console.error(error)
            res.json({
                success: false,
                message: 'no se pudo realizar la acción'
            })
        }
    },

    getOneUser: async(req,res) => {
        let error = null
        try {
            let user = {
                id: req.user._id,
                nick: req.user.nick,
                photo: req.user.photo,
                role: req.user.role
            }
            res.json({
                success: true,
                response: {user},
            })
        } catch(errorDeCatcheo) {
            error=errorDeCatcheo
            console.error(error)
            res.json({
                success: true,
                message: 'no se pudo realizar la acción'
            })
        }
    },

    putUser: async(req,res) => {
        let error = null
        if (req.body.password) {
            req.body.password = bcryptjs.hashSync(req.body.password, 10)
        }
        try {
            await User.findOneAndUpdate({_id:req.params.id},req.body,{new: true})
            res.json({
                success: true,
                message: 'usuario modificado'
            })
        } catch(errorDeCatcheo) {
            error=errorDeCatcheo
            console.error(error)
            res.json({
                success: false,
                message: 'no se pudo realizar la acción'
            })
        }
    },

    deleteUser: async(req,res) => {
        let error = null
        try {
            await User.findOneAndDelete({_id:req.params.id})
            res.json({
                success: true,
                message: 'usuario eliminado'
            })
        } catch(errorDeCatcheo) {
            error=errorDeCatcheo
            console.error(error)
            res.json({
                success: false,
                message: 'no se pudo realizar la acción'
            })
        }
    }

}

module.exports = userControllers