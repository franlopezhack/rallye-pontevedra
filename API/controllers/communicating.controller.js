const Communicate = require('../models/communicating.model')
const createError = require('http-errors')


module.exports.list = (req, res, next) => {
    Communicate.find()
        .then((communicate) => res.status(201).json(communicate))
        .catch((error) => next(error))
}

module.exports.create = (req, res, next) => {
    Communicate.create(req.body)
        .then(communicate => res.json(communicate))
        .catch(error => next(error))
}


module.exports.detail = (req, res, next) => {
    Communicate.findById(req.params.id)
        .then(communicate => {
            if (!communicate) {
                next(createError(404, 'not found'))
            } else {
                res.json(ma)
            }
        })
        .catch(error => next(error))
}

module.exports.delete = (req, res, next) => {
    Communicate.findByIdAndDelete(req.params.id)
        .then(communicate => {
            if (!communicate) {
                next(createError(404, `Map ${req.params.id} not found`))
            } else {
                res.status(204).send()
            }
        })
        .catch(error => next(error))
}
