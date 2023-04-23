const router = require('express').Router()
const passport = require('../config/passport')
const schema = require('../schemas/user')
const accountExistsSignIn = require('../middlewares/accountExistsSignIn')
const validator = require('../middlewares/validator')

const { getOneUser,putUser,deleteUser,signUp,signin,verifyToken,signOut
} = require('../controllers/au01.user.controller')

router.route('/:id')
    .get(passport.authenticate('jwt', {session:false}),getOneUser)
    .put(passport.authenticate('jwt', {session:false}),putUser)
    .delete(passport.authenticate('jwt', {session:false}),deleteUser)

router.post('/signup',validator(schema),signUp)
router.post('/signin',accountExistsSignIn,signin)
router.post('/signout',signOut)
router.post('/token',passport.authenticate('jwt', {session:false}),verifyToken)

module.exports = router