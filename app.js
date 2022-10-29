require('dotenv').config()

const express = require('express')
const app = express()
const logger = require('morgan')
const errorHandler = require('./middlewares/errorHandler')

const cors = require('cors')
const Router = require('./router/index')

app.use(cors())
app.use(express.json())
app.use('/api/marble', Router)
app.use(logger('dev'))
app.use(errorHandler)

module.exports = app