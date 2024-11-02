const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cards = require("./routes/cards");
const users = require("./routes/users");
const bodyParser = require("body-parser");
const path = require("path");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//app.use(express.json());

const { PORT = 3000 } = process.env;
mongoose.connect("mongodb://localhost:27017/aroundb");

app.use((req, res, next) => {
  req.user = {
    _id: "6724443783fd1d7cb1a5c394",
  };
  next();
});
module.exports.createCard = (req, res) => {
  console.log(req.user._id); // _id se volverá accesible
};
module.exports.updateUser = (req, res) => {
  console.log(req.user._id); // _id se volverá accesible
};

module.exports.updateUserAvatar = (req, res) => {
  console.log(req.user._id); // _id se volverá accesible
};
module.exports.addLike = (req, res) => {
  console.log(req.user._id); // _id se volverá accesible
};

app.use(cards);
app.use(users);

app.use((req, res, next) => {
  res.status(404).send({ message: "Recurso solicitado no encontrado" });
  next();
});

app.use(express.static(path.join(__dirname, "/")));
app.listen(PORT, () => {
  console.log(`${PORT} escuchando`);
});
