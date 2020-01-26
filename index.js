const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const todo = require("./todo/todo");
const user = require("./User/user");
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true,
}));

app.use(bodyParser.json());

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.get("/", function (req, res) {
  if (!req.session.user) {
    return res.status(401).json({ message: 'not logged in' });
  }
  todo.getTodo().then(todos => {
    res.json(todos);
  })
});

app.get("/search/:id", function (req, res) {
  todo.searchTodo(req.params.id).then(todos => {
    res.json(todos);
  })
});

app.post("/register", function (req, res) {
  user.checkUser(req.body.email).then(data => {
    if (data) {
      return res.status(422).json({ message: "User exists" });
    } else {
      user.addUser(req.body).then(data => {
        res.json(data);
      })
    }
  })
});

app.post("/login", function (req, res) {
  user.findUser(req.body.email, req.body.password).then(data => {
    console.log(data);
    if (data) {
      req.session.user = data;
      return res.json({ message:"helo usr"});
    } else {
      return res.status(422).json({ message: "User doesnt exists" });
    }
  })
});

app.post("/create", function (req, res) {
  if (!req.session.user) {
    return res.status(422).json({ message: "login please" })
  }
  let newTodo = req.body;
  newTodo.userId = req.session.user._id;
  todo.addTodo(newTodo).then(data => {
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
  todo.deleteTodo(req.params.id).then(data => {
    res.json(data)
  })
    ;
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
