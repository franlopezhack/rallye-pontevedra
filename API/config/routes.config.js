const createError = require('http-errors');
const express = require('express');
const router = express.Router();
const map = require('../controllers/maps.controller')
const releases = require('../controllers/release.controller')

router.get('/maps', map.list)
router.post('/maps', map.create)
router.get('/maps/:id', map.detail)
router.delete('/maps/:id', map.delete)

router.get('/releases', releases.list)
router.post('/releases', releases.create)
router.delete('/releases/:id', releases.delete)
router.get("/releases/:id", releases.detail);



router.use((req, res, next) => next(createError(404, 'Route not found')))

module.exports = router