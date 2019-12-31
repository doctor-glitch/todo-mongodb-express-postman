const express = require('express');

const todo = require('./todo/todo');

const app = express();

const port = 3000;

app.get('/', function(req,res){
    const todos = todo.getTodo();
    res.json(todos);
})
app.get('/login', function(req,res){
    res.send("Login Page");
})

app.listen(port, function(){
    console.log(`Example app listening on port ${port}!`)
})


