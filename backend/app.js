const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const {router} = require('./routes/router')
const {errorHandler} = require('./middleware/errorMiddleware')


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(router)
app.use(errorHandler)

const port = process.env.PORT || 5000
 
app.listen(port, () => console.log(`Server is running on port ${port}`))