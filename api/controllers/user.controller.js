const User = require('../models/User.model');

module.exports.list = (req, res, next) => {
  User.find()
    .then(users => {
      res.json(users)
    })
    .catch(next);
};

module.exports.create = (req, res, next) => {
  User.create(req.body)
    .then(user => res.status(201).json(user), console.log('User created'))
    .catch(next);
};