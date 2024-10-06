const mongoose = require("mongoose");
// now we will create the schema
// mongoose module exports a class called schema
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;
const User = new Schema({
  // email: String,
  email: { type: String, unique: true },
  password: { type: String, unique: true },
  name: String,
});
const Todo = new Schema({
  title: String,
  done: Boolean,
  userId: ObjectId,
});
const UserModel = mongoose.model("users", User); // here Users is the collection that i want to put my data in
// and the User is the schema now this mongoose.model actually lets me insert data in my Users collection and Todo collection
const TodoModel = mongoose.model("todos", Todo);
// i am exporting an object so that i can import this in index.js
module.exports = {
  UserModel,
  TodoModel,
};
