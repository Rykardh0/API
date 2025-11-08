

module.exports = app => {
    const controller = app.controllers.vendas;

    app.route('/api/v1/vendas')
        .get(controller.listaVendas)
        .post(controller.salvarVendas);
        //.delete(controller.deletaVendas);
}