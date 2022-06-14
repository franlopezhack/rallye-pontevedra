const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const communicatingSchema = new Schema({
    name: {
        type: String,
        required: 'Map title is required'
    },

    subName: {
        type: String
    },

    noticePdf: {
        type: String,
        required: 'Image is required'
    },
}, {
    timestamps: true
});

const Communicating = mongoose.model('Map', communicatingSchema);
module.exports = Map