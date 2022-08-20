const multer = require('multer')
const localStorage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, next) =>  {
        next(null, file.originalname)
    }
})

const upload = multer({
    storage: localStorage
}).single('testModel')

module.exports = upload

