const fs = require("fs");
const path = require("path");
const router = require("express").Router();
const usersPath = path.join(__dirname, ".././data/users.json");

router.get("/users", (req, res) => {
  fs.readFile(usersPath, (err, usersData) => {
    if (err) {
      console.log(err);
      return;
    }
    const user = JSON.parse(usersData);
    res.send(user);
  });
});

router.get("/users/:id", (req, res) => {
  fs.readFile(usersPath, (err, usersData) => {
    if (err) {
      console.log(err);
      return;
    }
    const user = JSON.parse(usersData);
    const search = user.find((element) => element._id === req.params.id);
    if (!search) {
      res.status(404).send({ message: "ID de usuario no encontrado" });
    }
    res.send(search);
  });
});

module.exports = router;
