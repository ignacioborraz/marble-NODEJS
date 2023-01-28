const router = require('express').Router()
const accountExistsSignIn = require('../middlewares/accountExistsSignIn')
const passport = require('../config/passport')

const {
} = require('../controllers/ge00.auth.controller')

router.route('/:id')
    .get(passport.authenticate('jwt', {session:false}),getOneUser)
    .put(passport.authenticate('jwt', {session:false}),putUser)
    .delete(passport.authenticate('jwt', {session:false}),deleteUser)

router.route('/signup')
    .post(signUp)

router.post('/signin',accountExistsSignIn,signin)

router.route('/signout')
    .post(signOut)

router.post('/token',passport.authenticate('jwt', {session:false}),verifyToken)

module.exports = router