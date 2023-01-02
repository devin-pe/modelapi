const fs = require('fs')
const asyncHandler = require('express-async-handler')
const upload = require('../config/storage')
const mlModel = require('../models/ml_model')

// @desc Gets all of the user's models
// @route GET /:id
// @access Private
const getModels = asyncHandler( async (req, res) => {
    const models = await mlModel.find({user : req.user.id})
    res.status(200).json(models)
})

// @desc Uploads a user's model
// @route POST /:id
// @access Private
const setModel = asyncHandler( async (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.log(err)
        }
        else {
            const newModel = mlModel({
                user: req.user.id,
                model: {
                data: req.file.filename,
                contentType: 'hdf5/h5',
                }
            })
            newModel.save()
            .then(()=>{
                res.send('success')
                console.log(req.body.name)
                console.log(req.body.filename)
                console.log(`success ${req.file.filename}`)
            })
            .catch(err=>console.log(err))
        }
        })
    }
)

// @desc Deletes a user's model
// @route DEL /:id
// @access Private
const delModel = asyncHandler( async (req, res) => {
    // Find the model
    const model = await mlModel.findById(req.params.id)
    if (!model) {
        res.status(400)
        throw new Error('Model not found')
    }

    // Check if user exists
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Check if user matches model owner
    if (model.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }
    
    await model.remove()
    res.status(200).json({id: req.params.id})
})

/** 
// @desc Displays index.ejs page in client browser
const createHomepage = asyncHandler( async (_, res) => {
    res.render('index')
})
*/

module.exports = {getModels, setModel, delModel}