require('dotenv').config()

const express = require('express');
const app = express();
require('./database/connection')

let port = 5000;

app.use('', require('./controllers/routes'))

app.listen(process.env.PORT || port, () => console.log(`listenign in port ${port}`));
