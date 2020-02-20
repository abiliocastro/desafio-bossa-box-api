var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

require('./config/connection');

var routes = require('./routes');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); //Depois limitar o cors

// Rotas
app.use(routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API listening on port ${ PORT }`);
});