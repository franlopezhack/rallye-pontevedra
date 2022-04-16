const createError = require('http-errors');
const express = require('express');
const router = express.Router();
const map = require('../controllers/maps.controller')
const release = require('../controllers/release.controller')

router.get('/maps', map.list)
router.post('/maps', map.create)
router.delete('/maps/:id', map.delete)
router.get('/releases', release.list)
router.post('/releases', release.create)


router.use((req, res, next) => next(createError(404, 'Route not found')))

router.use((error, req, res, next) => {
    console.error(error);

    const data = {
        message: error.message
    };
    
    res.status(error.status).json(data);
})

module.exports = router