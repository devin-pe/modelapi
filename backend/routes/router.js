const express = require('express')
const router = express.Router()
const {getModels, setModel, delModel, createHomepage} = require('../controllers/methods')

router.route('/').get(createHomepage)
router.route('/get').get(getModels)
router.route('/uploads').post(setModel)
module.exports = {router}