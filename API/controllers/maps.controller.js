const mongoose = require('mongoose')
const Maps = require('../models/rallye.model')


module.exports.list = (req, res, next) => {
    Maps.find()
    .then((maps) => res.json(maps))
    .catch((error) => next(error))
}

module.exports.create = (req, res, next) => {
    Maps.create()
    .the()
    .catch
}