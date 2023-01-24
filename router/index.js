const router = require('express').Router()

const authRouter = require('./ge00.auth.routes')
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

const jhonsonRouter = require('./sk01.jhonson.routes')
router.use('/jhonson',jhonsonRouter)
const accesoryRouter = require('./sk02.accesory.routes')
router.use('/accesory',accesoryRouter)
const sinkRouter = require('./sk03.sink.routes')
router.use('/sink',sinkRouter)

const stockRouter = require('./ge01.stock.routes')
router.use('/stock',stockRouter)
const codeRouter = require('./ge02.code.routes')
router.use('/code',codeRouter)

module.exports = router