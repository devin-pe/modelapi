const fs = require('fs')
const asyncHandler = require('express-async-handler')
const upload = require('../config/storage')
const mlModel = require('../model/ml_models')

// @desc Gets all of the user's models
const getModels = asyncHandler( async (req, res) => {
    const models = await mlModel.find()
    res.status(200).json(models)
})

// @desc Uploads a user's model
const setModel = asyncHandler( async (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.log(err)
        }
        else {
            const newModel = mlModel({
                //name: req.body.name
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
const delModel = asyncHandler( async (req, res) => {
    const model = await mlModel.findById(req.params.id)
    if (!model) {
        res.status(400)
        throw new Error('Model not found')
    }
    await model.remove()
    res.status(200).json({id: req.params.id})
})

// @desc Displays index.ejs page in client browser
const createHomepage = asyncHandler( async (req, res) => {
    res.render('index')
})

module.exports = {getModels, setModel, delModel, createHomepage}