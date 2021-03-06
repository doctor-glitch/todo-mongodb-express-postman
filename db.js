const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/todo", { useNewUrlParser: true, useUnifiedTopology: true });

const Todo = mongoose.model("Todo", { name: String, description: String, userId: mongoose.Schema.Types.ObjectId });

const User = mongoose.model("User", { fname: String, lname: String, email: String, password: String });

exports.Todo = Todo;
exports.User = User;