const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userControllers = {

    signUp: async (req,res) => {
        const {nick, photo, password, admin} = req.body
        try {
            const user = await User.findOne({nick})
            if (!user) {
                try {
                    let hashWord = bcryptjs.hashSync(password, 10)
                    await new User({nick, photo, password: hashWord, admin}).save()
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

    signIn: async (req, res) => {
        const {nick, password} = req.body
        try {
            const loginUser = await User.findOne({nick})
            if (!loginUser) {
                res.json({
                    success: false,
                    message: 'verifique los datos'})
            } else {
                let checked =  bcryptjs.compareSync(password,loginUser.password)
                if (checked) {
                    let user = {
                        id: loginUser._id,
                        nick: loginUser.nick,
                        photo: loginUser.photo,
                        role: loginUser.role}
                    await loginUser.save()
                    let token = jwt.sign({id: loginUser._id}, process.env.SECRET_KEY, {expiresIn: 1000*60*60*24})
                    res.json({
                        response: {token,user}, 
                        success: true, 
                        message: 'bienvenid@ '+user.nick})
                } else {
                    res.json({
                        success: false,
                        message: 'verifique los datos'
                    })
                }
            }
        } catch(error) {
            console.error(error)
            res.json({
                success: false,
                message: 'no se pudo realizar la acción'
            })
        }
    },

    signOut: async (req, res) => {
        const {id} = req.body
        try {
            const user = await User.findOne({_id:id})
            await user.save()
            res.json({
                success: true,
                message: 'hasta pronto!'})
        } catch(error) {
            console.error(error)
            res.json({
                success: false,
                message: 'no se pudo realizar la acción'
            })
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