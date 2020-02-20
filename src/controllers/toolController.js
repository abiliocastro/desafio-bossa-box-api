var toolService = require('../services/toolService');

// Criar uma ferramenta
exports.create = function (req, res) {
    if (!req.body) {
        res.status(400).send('Erro ao criar ferramenta informe os dados');
        return;
    }
    toolService.createTool(req.body, function (error, response) {
        if (response) {
            res.status(201).send(response);
        } else if (error) {
            res.status(400).send(error);
        }
    });
};