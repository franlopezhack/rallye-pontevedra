const createError = require('http-errors');
const express = require('express');
const router = express.Router();
const communicating = require('../controllers/communicating.controller')
const releases = require('../controllers/release.controller')
const upload = require('../config/multer.config')

router.get('/communicating', communicating.list)
router.post('/communicating', communicating.create)
router.get('/communicating/:id', communicating.detail)
router.delete('/communicating/:id', communicating.delete)

router.get('/releases', releases.list)
router.post('/releases', upload.single('avatar'), releases.create)
router.delete('/releases/:id', releases.delete)
router.get("/releases/:id", releases.detail);



router.use((req, res, next) => next(createError(404, 'Route not found')))

module.exports = router