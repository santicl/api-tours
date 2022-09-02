const mongoose = require('mongoose');

const ToursSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            unique: true
        },
        image: {
            type: String
        },
        descriptions: {
            type: Object
        },
        price: {
            type: Number
        },
        id: {
            type: mongoose.Types.ObjectId
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('tours', ToursSchema);