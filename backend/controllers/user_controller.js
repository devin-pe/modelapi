const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/user_model')

// @desc Registers a new user
// @route POST /register
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
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})  

// @desc Authenticates a new user
// @route /login
// @access Public
const login = asyncHandler( async(req, res) => {
    const {email, password} = req.body

    const user = await User.findOne({email})
    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
})

// @desc Retrieves user data
// @route GET /profile
// @access Private
const getUser = asyncHandler( async(_, res) => {
    res.json({message: 'User data display'})
})

// Generate JWT
const generateToken = (id) =>  {
    return jwt.sign({id}, process.env.JWT_SECRET, 
        {expiresIn: '30d'})
}

module.exports = {registerUser, login, getUser}
