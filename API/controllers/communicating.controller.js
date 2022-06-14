const Communicatings = require('../models/communicating.model')
const createError = require('http-errors')


module.exports.list = (req, res, next) => {
    Communicatings.find()
        .then((communicating) => res.status(201).json(communicating))
        .catch((error) => next(error))
}

module.exports.create = (req, res, next) => {
    Communicatings.create(req.body)
        .then(communicating => res.json(communicating))
        .catch(error => next(error))
}


module.exports.detail = (req, res, next) => {
    Communicatings.findById(req.params.id)
        .then(communicating => {
            if (!communicating) {
                next(createError(404, 'not found'))
            } else {
                res.json(ma)
            }
        })
        .catch(error => next(error))
}

module.exports.delete = (req, res, next) => {
    Communicatings.findByIdAndDelete(req.params.id)
        .then(communicating => {
            if (!communicating) {
                next(createError(404, `communicating ${req.params.id} not found`))
            } else {
                res.status(204).send()
            }
        })
        .catch(error => next(error))
}
