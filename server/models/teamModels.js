const mongoose = require("mongoose");

// Schema defines the structure of the
// particular document in the database
const Schema = mongoose.Schema;

const teamSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// next is make a model based on the Schema
// what a model does is to apply that Schema
// into particular model and use that model to interact
// with that collection of names

module.exports = mongoose.model("Team", teamSchema);
