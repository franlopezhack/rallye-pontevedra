const Map = require('../models/map.model')


module.exports.list = (req, res, next) => {
    Map.find()
    .then((maps) => res.status(201).json(maps))
    .catch((error) => next(error))
}

module.exports.create = (req, res, next) => {
    Map.create(req.body)
    .then(map => res.json(map))
    .catch(error => next(error))
}
