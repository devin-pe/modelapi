const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/user_model')
// @desc Registers a new user
// @route POST iNseRt route 
// @access Public
const registerUser = asyncHandler( async(req, res) => {
    // Validate inputs
    const {name, email, password} = req.body
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please fill all fields')
    }

    // Check if user exists
    const userExists = await User.findOne({email})
    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    // Encrypt password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if(user){
        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(400)
        throw new Error('Invalid user input data')
    }
})  

// @desc Authenticates a new user
// @route POST iNseRt route 
// @access Public
const login = asyncHandler( async(req, res) => {
    res.json({message: 'Login User'})
})

// @desc Retrieves user data
// @route GET iNseRt route 
// @access Public
const getUser = asyncHandler( async(req, res) => {
    res.json({message: 'User data display'})
})

module.exports = {registerUser, login, getUser}
