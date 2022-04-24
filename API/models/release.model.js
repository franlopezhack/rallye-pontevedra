const mongoose = require('mongoose')
const Schema = mongoose.Schema

const releaseSchema = new Schema ({
    title:{
        type: String,
        required: 'Release title is required'
    },

    description:{
        type: String,
        required: 'Release description in required'
    },

    image:{
        type: String,
        required: 'Release description in required'
    }
},{
    timestamps: true,
    toJSON:{
        transform: (doc, release) => {
            release.id = doc._id;
            delete release.__v;
            delete release._id;
            return release
        }
    }
}) 

const Release = mongoose.model('Release', releaseSchema);
module.exports = Release