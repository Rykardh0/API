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
    };

    controller.deletaVenda = (req, res) =>{
        const {customerId} = req.query;
        if(!customerId){
            return res.status(400).json({error: 'Informe o parâmetro customerId'});
        }
        //A base é mockada (JSON), então apenas filtramos e retornamos a simulação
        const novaLista = db.customerWallets.data.filter(
            item => item.id !== customerId
        );
        return res.status(200).json({
            message: `Cliente ${customerId} removido com sucesso (mock)`,
            totalAntes: db.customerWallets.data.length,
            totalDepois: novaLista.length,
        });
    }

    controller.atualizarVenda = (req, res) =>{
        const{
            customerId,
        } = req.params;
        const foundCustomerIndex =
        customerWalletsMock.data.findIndex(customer => customer.id === customerId);

        if(foundCustomerIndex === -1){
            res.status(404).json({
                message: 'Cliente não encontrado na base.',
                success: false,
                customerWallets: customerWalletsMock,
            });
        }else{
            const newCustomer = {
                id: customerId,
                parentId: req.body.parentId,
                name: req.body.name,
                birthDate: req.body.birthDate,
                cellphone: req.body.cellphone,
                phone: req.body.phone,
                email: req.body.email,
                occupation: req.body.occupation,
                state: req.body.state,
                createdAt: new Date()
            };
            customerWalletsMock.data.splice(foundCustomerIndex, 1, newCustomer);

            res.status(200).json({
                message: 'Cliente encontrado com sucesso!',
                success: true,
                customerWallets: customerWalletsMock,
            });
        }
    }

    return controller;

}