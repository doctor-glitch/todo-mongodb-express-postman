const express = require('express');

const todo = require('./todo/todo');

const app = express();

const port = 3000;

app.get('/', function(req,res){
    const todos = todo.getTodo();
    res.json(todos);
})
app.get('/add', function(req,res){
    const todos = todo.addTodo({id:3, name:"todo4", description:"todo4 desc"});
    res.json(todos);
})
app.get('/delete/:name', function(req,res){
    const id = req.params.name;
    const todos = todo.deleteTodo(id);
    res.json(todos);
})

app.listen(port, function(){
    console.log(`Example app listening on port ${port}!`)
})


