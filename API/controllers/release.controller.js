const Release = require('../models/release.model')
const createError = require('http-errors')


module.exports.list = (req, res, next) => {
    Release.find()
        .then(release => res.json(release))
        .catch(error => next(error))
};

module.exports.create = (req, res, next) => {
    Release.create({
        ...req.body,
        avatar: req?.file?.path
    })
        .then(release => res.status(201).json(release))
        .catch(error => next(error))
};

module.exports.detail = (req, res, next) => {
    Release.findById(req.params.id)
        .then((release) => {
            if (!release) {
                next(createError(404, `Product ${req.params.id} not found`))
            } else {
                res.json(release)
            }
        })
        .catch(error => next(error))
};

module.exports.delete = (req, res, next) => {
    Release.findByIdAndDelete(req.params.id)
        .then(release => {
            if (!release) {
                next(createError(404, `Notice ${req.params.id} not found`))
            } else {
                res.status(204).send()
            }
        })
        .catch(error => next(error))
}

