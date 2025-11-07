module.exports = () => {
    const dataDB = require('../data/database.json');
    const controller = {};

    controller.listaVendas = (req, res) => res.status(200).json(dataDB);

    return controller;

    controller.salvarVendas = (req, res) =>{
        dataDB.customerWallets.data.push({
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
}