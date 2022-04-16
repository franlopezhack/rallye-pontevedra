const Release = require('../models/release.model')


module.exports.create = (req, res, next) => {
    Release.create(req.body)
        .then(release => res.status(201).json(release))
        .catch(error => next(error))
}

module.exports.list = (req, res, next) => {
    Release.find()
    .then(release => res.json(release))
    .catch(error => next(error))
}