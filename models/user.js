const mongoose = require("mongoose");

/*function validator(val) {
  return val === "something";
}
new Schema({ name: { type: String, validate: validator } });

// with a custom error message

const custom = [validator, 'Uh oh, {PATH} does not equal "something".'];
new Schema({ name: { type: String, validate: custom } });
*/

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
    //validate: {
    // validator(v) {
    //  return (v = avatar = string);
    //},
    //message: "lo sentimos, la direccion que ingresaste no es valida",
    //},
  },
});

module.exports = mongoose.model("user", userSchema);
