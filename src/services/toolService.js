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