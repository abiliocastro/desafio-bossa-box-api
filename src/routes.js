var express = require('express');

var toolController = require('./controllers/toolController');

var routes = express.Router();

routes.get('/', function(req, res){
	res.status(200).send({message: "Root route responding"});
});

routes.post('/tools', toolController.create);
routes.get('/tools', toolController.findAll, toolController.findTag);
routes.delete('/tools/:id', toolController.delete);

module.exports = routes;