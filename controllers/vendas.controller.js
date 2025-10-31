module.exports = () => {
    const dataDB = require('../data/database.json');
    const controller = {};

    controller.listaVendas = (req, res) => res.status(200).json(dataDB);

    return controller;
}