

module.exports = app => {
    const controller = require('../controllers/vendas.controller')();

    app.route('/api/v1/vendas').get(controller.listaVendas);
}