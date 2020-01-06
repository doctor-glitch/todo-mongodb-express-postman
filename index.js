const express = require("express");
const bodyParser = require("body-parser");
const todo = require("./todo/todo");
const app = express();
const port = 3000;

app.use(bodyParser.json());


app.get("/", function (req, res) {
  todo.getTodo().then(todos => {
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
