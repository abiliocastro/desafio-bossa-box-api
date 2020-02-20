var toolModel = require('../models/tool');

// Criar uma ferramenta
exports.createTool = function(data, callback) {
    toolModel.create(data).then(
        response => {
            callback(null, response);
        },
        error => {
            callback(error, null);
        }
    );
};

// Obter todas as ferramentas cadastradas
exports.findAll = function(callback) {
    toolModel.find({}, callback);
};

// Filtrar por tag
exports.findByTag = function(tag, callback){
    toolModel.find({ tags: { $all: [tag] } }, callback);
}

// Deletar uma ferramenta por id
exports.deleteTool = function(id, callback) {
    toolModel.deleteOne({ _id: id}, callback);
}