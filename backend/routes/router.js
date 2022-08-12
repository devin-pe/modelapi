const express = require('express')
const router = express.Router()
const {getModels, setModel, delModel} = require('../controllers/methods')

router.route('/:id').get(getModels)

module.exports = {router}