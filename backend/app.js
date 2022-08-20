const express = require('express')
const bodyParser = require('body-parser')
require('colors')
require('dotenv').config()
const methodOverride = require('method-override')
const {router} = require('./routes/router')
const {errorHandler} = require('./middleware/errors')
const connectDB = require('./config/db')

connectDB()
const app = express()
app.set('view engine', 'ejs')
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:false}))
app.use(router)
app.use(errorHandler)

const port = process.env.PORT || 5000
 
app.listen(port, () => console.log(`Server is running on port ${port}`))