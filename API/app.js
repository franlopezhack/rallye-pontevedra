const express = require('express')

const app = express();


const port = process.env.PORT || 3001
app.listen(port, () => console.info(`Aplication racing  🏎️   at port ${port} 🏁`))