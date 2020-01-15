const express = require("express");
const bodyParser = require("body-parser");
const todo = require("./todo/todo");
const app = express();
const port = 3000;
const cors =require('cors');

app.use(cors());

app.use(bodyParser.json());


app.get("/", function (req, res) {
  todo.getTodo().then(todos => {
    res.json(todos);
  })
});

app.get("/search/:id", function (req, res) {
  todo.searchTodo(req.params.id).then(todos => {
    res.json(todos);
  })
});

app.post("/create", function (req, res) {
  todo.addTodo(req.body).then(data => {
    res.json(data);
  })
});

app.put("/edit/:id", function (req, res) {
  todo.editTodo(
    req.params.id,
    req.body.name,
    req.body.description
  ).then(data => {
    res.json(data);
  })

});

app.delete("/delete/:id", function (req, res) {
  todo.deleteTodo(req.params.id).then(data=>{
    res.json(data)
  })
  ;
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
