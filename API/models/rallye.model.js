const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const mapsSchema = new Schema({
    name: {
        type: String,
        required: 'Map title is required'
    },

    subName: {
        type: String
    },

    image: {
        type: String,
        required: 'Image is required'
    },

    eventDT: {
        type: Date,
        required: 'Date is required'
    }
}, {
    timestamps: true
});

const Maps = mongoose.model('Maps', mapsSchema);
module.exports = Maps