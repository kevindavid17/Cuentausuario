const User = require('../models/user.model');


module.exports.createUser = (req, res) => {

    const { userName, email } = req.body;
    
    User.create(
        { userName, email }
    )
        .then(user => res.json({ insertedUser: user, msg: 'Successful creation' }))
        .catch(err => res.status(400).json(err))
}

module.exports.getAllUsers = ( _ , res) => {

    User.find({})

        .then(retrievedUsers => res.json(retrievedUsers))
        .catch(err => res.json(err))

}

module.exports.getUser = (req, res) => {

    User.findOne({_id:req.params.id})

        .then(user => res.json(user))
        .catch(err => res.json(err))

}

module.exports.updateUser = (req, res) => {

    User.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})

        .then(updatedUser => res.json(updatedUser))
        .catch(err => res.json(err))

}

module.exports.deleteUser = (req, res) => {

    User.deleteOne({ _id: req.params.id })

        .then(userDeleted => res.json(userDeleted))
        .catch(err => res.json(err))

}

