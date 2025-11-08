const {uuid} = require("uuidv4");

module.exports = app => {
    const db = app.data.database;
    const controller = {};

    const {
        customerWallets: customerWalletsMock,
    } = db;

    controller.listaVendas = (req, res) => {
        return res.status(200).json(db.customerWallets)};

    controller.salvarVendas = (req, res) => {
        db.customerWallets.data.push({
            id: uuid,
            parentId: uuid,
            name: req.body.name,
            birthDate: req.body.birthDate,
            cellphone: req.body.cellphone,
            phone: req.body.phone,
            email: req.body.email,
            occupation: req.body.occupation,
            state: req.body.state,
        });
        res.status(201).json(db);
    }

    return controller;

}