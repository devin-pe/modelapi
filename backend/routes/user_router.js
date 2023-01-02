const express = require('express')
const router = express.Router()
const {registerUser, login, getUser} = require('../controllers/user_controller')
const {protect} = require('../middleware/auth')

router.route('/register').post(registerUser)
router.route('/login').post(login)
router.route('/profile').get(getUser, protect)

module.exports = router