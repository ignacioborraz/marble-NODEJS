const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const crypto = require('crypto')
const sendVerification = require('./sendVerification')
const jwt = require('jsonwebtoken')

const userControllers = {

    signUp: async (req,res) => {
        const {nameUser, lastNameUser, photoUser, mail, password, role, from,company} = req.body
        try {
            const user = await User.findOne({mail}) //buscamos por mail
            const hashWord = bcryptjs.hashSync(password, 10) //hasheo la contraseña
            const verification = false //por default
            const uniqueString = crypto.randomBytes(15).toString('hex') //utilizo los métodos de crypto
            if (!user) { //si NO existe el usuario
                const newUser = await new User({nameUser, lastNameUser, photoUser, mail, role, verification, company,
                    uniqueString: uniqueString,
                    password: [hashWord],
                    from: [from]})
                if (from === "signUpForm") { //si la data viene del formulario
                    await newUser.save()
                    await sendVerification(mail, uniqueString)
                        res.json({
                            success: true, 
                            from: from,
                            message: `check ${mail} and finish your SIGN UP!`}) 
                } else { //si la data viene de una red social
                    newUser.verification = true //no es necesario que valide datos
                    await newUser.save()
                    res.json({
                        success: true, 
                        from: from,
                        message: `you've just signed up by ${from}! now LOG IN!`})
                }
            } else { //si existe el usuario, significa que al menos tiene un registro
                if (user.from.indexOf(from) !== -1) { //si el indice de from es cualquier numero que no sea -1 significa que ya existe el usuario y NO DEBEMOS PERMITIRLE volver a registrarse
                    res.json({
                        success: false,
                        from: from,
                        message: `${mail} has been registered yet, please LOG IN!`})
                } else { //si es -1 significa que el usuario NO SE REGISTRO DE ESTA FORMA (nuevo registro con google) pero ya tiene AL MENOS UN registro (facebook y form)
                    user.password.push(hashWord)
                    user.from.push(from) //agregamos datos
                    user.verification = true //no necesariamente puede estar verificada la cuenta
                    await user.save()
                    res.json({
                        success: true, 
                        from: from, 
                        message: `you are ready to SIGN UP!`}) 
                }
            }
        } catch (error) {
            console.log(error)
            res.json({
                success: false,
                from: from,
                message: error})
        }
    },

    signIn: async (req, res) => {
        //console.log('REQ BODY SIGN IN USER')
        //console.log(req.body)
        const {mail, password, from} = req.body
        try {
            const loginUser = await User.findOne({mail}) //buscamos por email
            //console.log(loginUser)
            if (!loginUser) { //si NO existe el usuario
                res.json({
                    success: false,
                    from: 'no from',
                    message: `incorrect mail or password`})
            //} else if (loginUser && loginUser.verification) { //ESTO ES REDUNDANTE
            } else if (loginUser.verification) { //si existe la verificacion del usuario
                let checkedWord =  loginUser.password.filter(pass => bcryptjs.compareSync(password, pass))
                //console.log(checkedWord)
                //filtramos en el array de contraseñas hasheadas si coincide la contraseña 
                if (from === "signUpForm") { //si fue registrado por nuestro formulario
                    if (checkedWord.length>=0) {
                        const user = {
                            id: loginUser._id,
                            mail: loginUser.mail,
                            nameUser: loginUser.nameUser,
                            photoUser: loginUser.photoUser,
                            role: loginUser.role,
                            from: loginUser.from}
                        await loginUser.save()
                        const token = jwt.sign({id: loginUser._id}, process.env.SECRET_KEY, {expiresIn: 1000*60*60*24 })
                        //console.log(token)
                        res.json({
                            response: {token,user}, 
                            success: true, 
                            from: from, 
                            message: `welcome back ${user.nameUser}!`})
                    } else { //si no hay coincidencias
                        res.json({
                            success: false, 
                            from: from,  
                            message: `verify your password!`})
                    }
                } else { //si fue registrado por redes sociales
                    if (checkedWord.length>=0) { //si hay coincidencias
                        const user = { //este objeto lo utilizaremos cuando veamos TOKEN
                            id: loginUser._id,
                            mail: loginUser.mail,
                            nameUser: loginUser.nameUser,
                            photoUser: loginUser.photoUser,
                            role: loginUser.role,
                            from: loginUser.from}
                        await loginUser.save()
                        const token = jwt.sign({id: loginUser._id}, process.env.SECRET_KEY, {expiresIn: 1000*60*60*24 })
                        //console.log(token)
                        res.json({
                            response: {token,user}, 
                            success: true, 
                            from: from, 
                            message: `welcome back ${user.nameUser}!`})
                    } else { //si no hay coincidencias
                        res.json({
                            success: false, 
                            from: from,  
                            message: `verify your mail or password!`})
                    }
                }
            } else { //si está registrado PERO el usuario NO FUE VALIDADO
                res.json({
                    success: false,
                    from: from,
                    message: `validate your account`})
            }
        } catch (error) {
            console.log(error)
            res.json({
                success: false,
                from: from,
                message: 'ERROR'})
        }
    },

    verifyMail: async (req, res) => {
        const {string} = req.params
        const user = await User.findOne({uniqueString: string})
        //console.log(user)
        if (user) {
            user.verification = true
            await user.save()
            res.redirect("http://localhost:3000/signIn")
        }
        else {res.json({
            success: false,
            message: `email has not account yet!`})
        }
    },

    signOut: async (req, res) => {
        //console.log('signOut')
        //console.log(req.body)
        const mail = req.body.mail
        const user = await User.findOne({mail})
        await user.save()
        res.json({
            success: true,
            message: mail+' sign out!'})
    },

    verifyToken:(req, res) => {
        //console.log(req.user)
        const user = {
            id: req.user.id,
            mail: req.user.mail,
            nameUser: req.user.nameUser,
            photoUser: req.user.photoUser,
            role: req.user.role,
            from: "token"}
        if (!req.err) {
        res.json({
            success: true,
            response: {user},
            message: "Hi! Welcome back "+req.user.nameUser}) 
        } else {
            res.json({
                success:false,
                message:"sign in please!"}) 
        }
    },
    
    getUsers: async(req,res) => {
        let users = []
        let error = null
        try {
            users = await User.find()
            .populate("company", {nameCompany:1})
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