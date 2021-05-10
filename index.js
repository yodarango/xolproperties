//require('dotenv').config()

const express       = require('express');
const app           = express();
app.set             ('view engine', 'ejs')
require             ('./database/connection')
app.use             ('', require('./controllers/routes'))

let port = 5000;

app.listen(process.env.PORT || port, () => console.log(`listenign in port ${port}`));
