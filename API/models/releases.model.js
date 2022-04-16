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
    }
},{
    timestamps: true,
}) 

const Release = model.mongoose('Release', releaseSchema)
model.export = Release