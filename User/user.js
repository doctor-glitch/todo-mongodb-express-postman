const db = require("../db");
function addUser(user) {
  const newUser = new db.User(user);
  return newUser.save();
}

exports.addUser = addUser;