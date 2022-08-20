const express = require('express')
const router = express.Router()
const {getModels, setModel, delModel, createHomepage} = require('../controllers/methods')

router.route('/').get(createHomepage)
router.route('/get').get(getModels) //change this (GET ALL) and post to same route later
router.route('/uploads').post(setModel)
router.route('/:id').delete(delModel)
module.exports = {router}