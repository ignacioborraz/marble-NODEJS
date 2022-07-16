const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userControllers = {

    signUp: async (req,res) => {
        const {nameUser, lastNameUser, photoUser, mail, password, role} = req.body
        try {
            const user = await User.findOne({mail})
            const hashWord = bcryptjs.hashSync(password, 10)
            if (!user) {
                const newUser = await new User(
                    {nameUser, lastNameUser, photoUser, mail, role, password: [hashWord]}).save()
                res.json({
                    success: true, 
                    message: `${mail}: cuenta creada`
                }) 
            } else {
                res.json({
                    success: false,
                    message: `${mail}: la cuenta ya existe`
                })
            }
        } catch (error) {
            console.log(error)
            res.json({
                success: false,
                message: `error`})
        }
    },

    signIn: async (req, res) => {
        const {mail, password} = req.body
        try {
            const loginUser = await User.findOne({mail})
            if (!loginUser) {
                res.json({
                    success: false,
                    message: `la cuenta no existe`})
            } else {
                let checkedWord =  loginUser.password.filter(pass => bcryptjs.compareSync(password, pass))
                if (checkedWord.length===1) {
                    const user = {id: loginUser._id,
                        mail: loginUser.mail,
                        nameUser: loginUser.nameUser,
                        photoUser: loginUser.photoUser,
                        role: loginUser.role}
                    await loginUser.save()
                    const token = jwt.sign({id: loginUser._id}, process.env.SECRET_KEY, {expiresIn: 1000*60*60*24 })
                    res.json({
                        response: {token,user}, 
                        success: true, 
                        message: `bienvenido ${user.nameUser}!`})
                } else {
                    res.json({
                        success: false,
                        message: `contraseña incorrecta`
                    })
                }
            }
        } catch(error) {
            console.log(error)
            res.json({
                success: false,
                message: 'error'})
        }
    },

    signOut: async (req, res) => {
        const mail = req.body.mail
        const user = await User.findOne({mail})
        await user.save()
        res.json({
            success: true,
            message: 'hasta pronto!'})
    },

    verifyToken:(req, res) => {
        //console.log(req.user)
        const user = {
            id: req.user.id,
            mail: req.user.mail,
            nameUser: req.user.nameUser,
            photoUser: req.user.photoUser,
            role: req.user.role}
        if (!req.err) {
        res.json({
            success: true,
            response: {user},
            message: `bienvenido ${user.nameUser}!`}) 
        } else {
            res.json({
                success:false,
                message:"inicia sesión"}) 
        }
    },
    
    getUsers: async(req,res) => {
        let users = []
        let error = null
        try {
            users = await User.find()
        } catch(errorDeCatcheo) {
            error=errorDeCatcheo
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : users,
            success: error ? false : true,
            error: error
        })
    },

    getOneUser: async(req,res) => {
        let oneUser = {}
        let error = null
        let {id} = req.params
        try {
            oneUser = await User.findOne({_id:id})
        } catch(errorDeCatcheo) {
            error=errorDeCatcheo
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : oneUser,
            success: error ? false : true,
            error: error
        })
    },

    putUser: async(req,res) => {
        let putUser = {}
        let error = null
        let {id} = req.params
        if (req.body.password) {
            req.body.password = bcryptjs.hashSync(req.body.password, 10) //hasheo la contraseña
        }
        try {
            putUser = await User.findOneAndUpdate({_id:id},req.body,{new: true})
        } catch(errorDeCatcheo) {
            error=errorDeCatcheo
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : putUser,
            success: error ? false : true,
            error: error
        })
    },

    deleteUser: async(req,res) => {
        let deleteUser = {}
        let error = null
        let {id} = req.params
        try {
            deleteUser = await User.findOneAndDelete({_id:id})
        } catch(errorDeCatcheo) {
            error=errorDeCatcheo
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : deleteUser,
            success: error ? false : true,
            error: error
        })
    }

}

module.exports = userControllers