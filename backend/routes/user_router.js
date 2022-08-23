const express = require('express')
const router = express.Router()
const {registerUser, login, getUser} = require('../controllers/user_controller')

router.route('/').post(registerUser).get(getUser)
router.route('/login').post(login)

module.exports = router