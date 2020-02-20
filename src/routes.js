var express = require('express');

var toolController = require('./controllers/toolController');

var routes = express.Router();

routes.get('/', function(req, res){
	res.status(200).send({message: "Root route responding"});
});

routes.post('/tools', toolController.create);

module.exports = routes;