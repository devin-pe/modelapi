const mongoose = require('mongoose')

const modelSchema = mongoose.Schema({
    /*name: {
        type: String,
        required: true
    },*/
    model: {
        data: Buffer,
        contentType: String,
    },
},  {
    timestamps: true
  }
)

module.exports = mongoose.model('mlModel', modelSchema)