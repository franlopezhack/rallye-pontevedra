require('dotenv').config()

const express = require('express')
const logger = require('morgan');
const mongoose = require('mongoose');
const createError = require('http-errors')

/*Congis*/
require('./config/db.config');

const app = express();

app.use((req, res, next) => {
    res.setHeader(
        "Access-Control-Allow-Origin",
        process.env.CORS_ORIGIN || "http://localhost:3000"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    //configuracion de las cabecereas de las peticiones del service.
    res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");

    if (req.method === "OPTIONS") {
        return res.status(200).send();
    }

    next();
});

app.use(express.json())
app.use(logger('dev'));

const routes = require('./config/routes.config')
app.use('/api', routes)

app.use((error, req, res, next) => {
    if (error instanceof mongoose.Error.CastError && error.message.includes('ObjectId')) {
        error = createError(404, 'Resource not found');
    } else if (error instanceof mongoose.Error.ValidationError) {
        error = createError(400, error);
    } else if (!error.status) {
        error = createError(500, error)
    }
    console.error(error);

    const data = {};
    data.message = error.message;
    if (error.errors) {
        data.errors = Object.keys(error.errors)
            .reduce((errors, key) => ({
                ...errors,
                [key]: error.errors[key]?.message || error.errors[key],
            }),
                {}
            );
    }

    res.status(error.status).json(data)
})


const port = process.env.PORT || 3001
app.listen(port, () => console.info(`Aplication racing  🏎️   at port ${port} 🏁`))