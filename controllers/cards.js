const Card = require("../models/card");
const path = require("path");

module.exports.getCards = (req, res) => {
  Card.find({})
    .orFail()
    .then((card) => res.send({ data: card }))
    .catch((err) => res.status(404).send({ message: "imagen no encontrada" }));
};

module.exports.createCard = (req, res) => {
  console.log(req.user._id);
  Card.create({ ...req.body, owner: req.user._id })
    .then((card) =>
      res.send({
        status: true,
        card,
      })
    )
    .catch((err) => {
      res.status(400).send({ message: "Los datos son incorrectos" });
    });
};

module.exports.addLike = (req, res) => {
  const { cardId } = req.body;
  console.log(cardId);
  Card.findByIdAndUpdate(
    { _id: cardId },
    { $addToSet: { likes: req.user._id } },
    { new: true }
  )
    .then((card) => res.send({ status: true, card }))
    .catch((err) => res.status(500).send({ message: err }));
};
