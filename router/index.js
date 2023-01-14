const router = require('express').Router()

const authRouter = require('./auth')
router.use('/auth',authRouter)

const companyRouter = require('./pl01.company.routes')
router.use('/company',companyRouter)
const colorRouter = require('./pl02.color.routes')
router.use('/color',colorRouter)
const typeRouter = require('./pl03.type.routes')
router.use('/type',typeRouter)
const stateRouter = require('./pl04.state.routes')
router.use('/state',stateRouter)
const plateRouter = require('./pl05.plate.routes')
router.use('/plate',plateRouter)

const accesoryRouter = require('./accesory')
router.use('/accesory',accesoryRouter)
const jhonsonRouter = require('./jhonson')
router.use('/jhonson',jhonsonRouter)
const sinkRouter = require('./sink')
router.use('/sink',sinkRouter)

const stockRouter = require('./stock')
router.use('/stock',stockRouter)
const codeRouter = require('./code')
router.use('/code',codeRouter)

module.exports = router