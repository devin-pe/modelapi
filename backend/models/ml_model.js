const mongoose = require('mongoose')

const modelSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    model: {
        data: Buffer,
        contentType: String,
    },
},  {
    timestamps: true
  }
)

module.exports = mongoose.model('mlModel', modelSchema)