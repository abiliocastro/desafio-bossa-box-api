const toolService = require('../services/toolService');

// Criar uma ferramenta
exports.create = function (req, res) {
    if (!req.body) {
        res.status(400).send({message: 'Erro ao criar ferramenta informe os dados corretamente'});
        return;
    }
    toolService.createTool(req.body, function (error, response) {
        if (response) {
            res.status(201).send(response);
            return;
        } else if (error) {
            res.status(400).send(error);
            return;
        }
    });
};

// Obter todas as ferramentas ou obter por tag
exports.findAll = function(req, res, next) {
    if(Object.keys(req.query).length !== 0){
        return next();
    }else{
        toolService.findAll(function(error, response) {
            if (response) {
                res.status(200).send(response);
                return;
            } else if (error) {
                res.status(400).send(error);
                return;
            } else {
                res.status(404).send();
                return;    
            }
        });
    }  
};

// Obter todas as ferramentas que possuem determinada tag
exports.findTag = function(req, res) {
    if(!req.query.tag){
        res.status(400).send({message: 'Erro ao buscar por tag, informe a tag a ser buscada'});
        return;    
    }
    const tag = req.query.tag
    toolService.findByTag(tag, function(error, response) {
        if (response) {
            if(response.length === 0){
                res.status(404).send({message: 'Nenhuma ferramenta encontrada para a tag buscada'});
                return;    
            } else {
                res.status(200).send(response);
                return;
            }
        } else if (error) {
            res.status(400).send(error);
            return;
        }
    });
};

// Atualizar uma ferramenta
exports.update = function (req, res) {
    if (!req.body) {
        res.status(400).send({message: 'Erro ao editar ferramenta, informe os dados corretamente'});
        return;
    } else {
        if(!req.body.id){
            res.status(400).send({message: 'Erro ao editar ferramenta, informe os dados corretamente'});
            return;    
        } else {
            toolService.updateToolById(req.body.id, req.body.tool, function (error, response) {
                if (response) {
                    res.status(201).send({ message: 'Ferramenta editada com sucesso'});
                    return;
                } else if (error) {
                    res.status(400).send(error);
                    return;
                }
            });
        }
    }
    
};

// Deletar uma ferramenta
exports.delete = function(req, res) {
    if(!req.params.id){
        res.status(400).send({message: 'Erro ao deletar, informe o id da ferramenta'});
        return;    
    }
    const id = req.params.id
    toolService.deleteTool(id, function(error, response){
        if(response){
            res.status(204).send();
            return;
        }else if (error) {
            res.status(400).send(error);
            return;
        }
    })
}