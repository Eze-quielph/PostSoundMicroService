const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const routes = require('./routes/index.routes')
const app = express();

//middleware
app.use(express.json())
app.use(morgan('dev'))
app.use(cors('*'))

//routes
app.use('/post', routes)

module.exports = app