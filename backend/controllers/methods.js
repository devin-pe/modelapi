const asyncHandler = require('express-async-handler')

// @desc Gets all of the user's models
const getModels = asyncHandler( async (req, res) => {
    res.json({message:'hi'})
})

// @desc Uploads a user's model
const setModel = asyncHandler( async (req, res) => {
    res.json({message:'hi'})
})

// @desc Deletes a user's model
const delModel = asyncHandler( async (req, res) => {
    res.json({message:'hi'})
})


module.exports = {getModels, setModel, delModel}