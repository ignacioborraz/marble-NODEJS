require('dotenv').config()

const express = require('express')
const app = express()
const logger = require('morgan')
const errorHandler = require('./middlewares/errorHandler')
const notFoundHandler = require('./middlewares/notFoundHandler')

const cors = require('cors')
const router = require('./router/index')

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use('/api/marble', router)
app.use(notFoundHandler)
app.use(errorHandler)

module.exports = app