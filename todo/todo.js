const db = require("../db");

function addTodo(todo) {
  const newTodo = new db.Todo(todo);
  return newTodo.save();
}
function editTodo(id, name, description) {
  return db.Todo.update({ _id: id }, { name, description });
}
function getTodo() {
  return db.Todo.find({}).sort({ name: 'desc' });
}
function deleteTodo(id) {
  return db.Todo.deleteOne({ _id: id });
}
function searchTodo(id){
	return db.Todo.findOne({_id:id});
}
var name = "todo";
exports.addTodo = addTodo;
exports.getTodo = getTodo;
exports.deleteTodo = deleteTodo;
exports.name = name;
exports.editTodo = editTodo;
exports.searchTodo=searchTodo;
