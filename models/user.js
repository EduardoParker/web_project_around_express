const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return (v =
          /(((http|https):\/\/))(\w{3}:{0,1})?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(
            v
          ));
      },
      message: "lo sentimos, la direccion que ingresaste no es valida",
    },
  },
});

module.exports = mongoose.model("user", userSchema);
