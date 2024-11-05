const { default: mongoose } = require("mongoose");
const User = require("../models/user");
const path = require("path");

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch((err) => res.status(500).send({ message: "Error" }));
};

module.exports.getUser = (req, res) => {
  User.findById(req.params.id)
    .orFail()
    .then((user) => res.send({ data: user }))
    .catch((err) =>
      res.status(404).send({ message: "ID de usuario no encontrado" })
    );
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) =>
      res.send({
        status: true,
        user,
      })
    )
    .catch((err) =>
      res
        .status(400)
        .send({ message: "Los datos son incorrectos, por favor revisalos" })
    );
};

module.exports.updateUser = (req, res) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    { new: true, runValidators: true }
  )
    .orFail()
    .then((user) => res.send({ data: user }))
    .catch((err) =>
      res
        .status(400)
        .send({ message: "Los datos son incorrectos, por favor revisalos" })
    );
};

module.exports.updateUserAvatar = (req, res) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    {
      new: true,
      runValidators: true,
    }
  )
    .orFail()
    .then((user) => res.send({ status: true, data: user }))
    .catch((err) =>
      res
        .status(400)
        .send({ message: "La direccion es incorrecta, , por favor revisala" })
    );
};
