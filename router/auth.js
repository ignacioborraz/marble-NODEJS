const router = require('express').Router()
//const validator = require('./config/validator')
const passport = require('../config/passport')

const {
    signUp,signIn,signOut,verifyToken,getUsers,getOneUser,putUser,deleteUser
} = require('../controllers/userControllers')

router.route('/')
    .get(passport.authenticate('jwt', {session:false}),getUsers)

router.route('/:id')
    .get(passport.authenticate('jwt', {session:false}),getOneUser)
    .put(passport.authenticate('jwt', {session:false}),putUser)
    .delete(passport.authenticate('jwt', {session:false}),deleteUser)

router.route('/sign/up')
    .post(signUp)

router.route('/sign/in')
    .post(signIn)

router.route('/sign/out')
    .post(signOut)

router.route('/sign/token')
    .get(passport.authenticate('jwt', {session:false}),verifyToken)

module.exports = router