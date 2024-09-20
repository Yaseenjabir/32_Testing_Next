const { default: mongoose } = require("mongoose");

const model = new mongoose.Schema({
  name: String,
  age: Number,
});

export const testingSchema =
  mongoose.models.testing || mongoose.model("testing", model);
