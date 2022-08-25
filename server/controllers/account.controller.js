const Account = require('../models/account.model');

module.exports.createAccount = (req, res) => {

    const { email, password, confirmPassword } = req.body;
    
    Account.create(
        { email, password, confirmPassword }
    )
        .then(account => res.json({ insertedAccount: account, msg: 'Successful creation' }))
        .catch(err => res.status(400).json(err))
}

module.exports.getAllAccounts = ( _ , res) => {

    Account.find({})

        .then(retrievedAccounts => res.json(retrievedAccounts))
        .catch(err => res.json(err))

}

module.exports.getAccounts = (req, res) => {

    Account.findOne({_id:req.params.id})

        .then(account => res.json(account))
        .catch(err => res.json(err))

}

module.exports.updateAccount = (req, res) => {

    Account.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})

        .then(updatedAccount => res.json(updatedAccount))
        .catch(err => res.json(err))

}