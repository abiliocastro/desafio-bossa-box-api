const express = require('express');

const toolController = require('./controllers/toolController');

const routes = express.Router();

routes.get('/', function(req, res){
	res.status(200).send({message: "Root route responding"});
});

routes.post('/tools', toolController.create);
routes.get('/tools', toolController.findAll, toolController.findTag);
routes.put('/tools', toolController.update);
routes.delete('/tools/:id', toolController.delete);

module.exports = routes;