const db = require("../db");

let todos = [
  { id: 0, name: "todo1", description: "todo1 desc" },
  { id: 1, name: "todo2", description: "todo2 desc" },
  { id: 2, name: "todo3", description: "todo3 desc" }
];
function addTodo(todo) {
  const newTodo=new db.Todo(todo);
  return newTodo.save();
}
function editTodo(id, name, description) {
  let todo = todos.find(function (todo) {
    return todo.id == id;
  });
  todo.name = name;
  todo.description = description;
  return todos;
}
function getTodo() {
  return db.Todo.find({});
}
function deleteTodo(id) {
  todos = todos.filter(function (todo) {
    return todo.id != id;
  });
  return todos;
}
var name = "todo";
exports.addTodo = addTodo;
exports.getTodo = getTodo;
exports.deleteTodo = deleteTodo;
exports.name = name;
exports.editTodo = editTodo;
