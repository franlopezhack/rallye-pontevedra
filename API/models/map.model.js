const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const mapSchema = new Schema({
    name: {
        type: String,
        required: 'Map title is required'
    },

    subName: {
        type: String
    },

    maps: {
        type: String,
        required: 'Image is required'
    },
    mapDT:{
        type: String
    }
}, {
    timestamps: true
});

const Map = mongoose.model('Map', mapSchema);
module.exports = Map