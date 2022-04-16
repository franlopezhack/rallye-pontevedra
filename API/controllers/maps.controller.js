const Map = require('../models/maps.model')


module.exports.list = (req, res, next) => {
    Map.find()
    .then((maps) => res.json(maps))
    .catch((error) => next(error))
}

module.exports.create = (req, res, next) => {
    Map.create(req.body)
    .then(map => res.json(map))
    .catch(error => next(error))
}