const express = require("express");
const app = express();
const cards = require("./routes/cards");
const users = require("./routes/users");

const { PORT = 3000 } = process.env;

app.use("/", cards);
app.use("/", users);
app.use((req, res, next) => {
  res.status(404).send({ message: "Recurso solicitado no encontrado" });
  next();
});

app.listen(PORT, () => {
  console.log(`${PORT} escuchando`);
});
