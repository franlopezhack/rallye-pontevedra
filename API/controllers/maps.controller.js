const Map = require('../models/map.model')
const createError = require('http-errors')


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

module.exports.delete = (req, res, next) => {
    Map.findByIdAndDelete(req.params.id)
    .then( map => {
        if(!map){
            next(createError(404, `Map ${req.params.id} not found`))
        } else {
            res.status(204).send()
        }
    })
    .catch(error => next(error))
}
