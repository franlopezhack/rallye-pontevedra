require('dotenv').config()

const express = require('express')
const logger = require('morgan');

/*Congis*/
require('./config/db.config');

const app = express();

app.use(express.json())
app.use(logger('dev'));

const routes = require('./config/routes.config')
app.use('/api', routes)


const port = process.env.PORT || 3001
app.listen(port, () => console.info(`Aplication racing  🏎️   at port ${port} 🏁`))