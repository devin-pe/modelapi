const express = require('express')
const router = express.Router()
const {protect} = require('../middleware/auth')
const {getModels, setModel, delModel} = require('../controllers/ml_controller')

router.route('/').get(protect) // Include homepage here
router.route('/:id').get(protect, getModels).post(protect, setModel).delete(protect, delModel)

module.exports = router
