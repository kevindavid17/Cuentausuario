const AccountController = require('../controllers/account.controller');

module.exports = function(app){

    app.post('/api/account/new',  AccountController.createAccount);
    app.get('/api/accounts', AccountController.getAllAccounts);
    //app.get('/api/account/:id', AccountController.getAccount);
    //app.put('/api/account/:id/', AccountController.updateAccount);
}

