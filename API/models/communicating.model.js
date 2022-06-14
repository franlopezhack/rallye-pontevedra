const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const communicatingSchema = new Schema({
    name: {
        type: String,
        required: 'pdf title is required'
    },

    subName: {
        type: String
    },

    pdf: {
        type: String,
        required: 'pdf is required'
    },
  
}, {
    timestamps: true
});

const Communicating = mongoose.model('Communicating', communicatingSchema);
module.exports = Communicating