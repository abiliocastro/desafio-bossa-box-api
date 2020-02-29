const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

require('./config/connection');

const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Rotas
app.use(routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API listening on port ${ PORT }`);
});