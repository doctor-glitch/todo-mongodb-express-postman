const fs = require('fs');

console.log("started");

const data = fs.readFile('./sample.txt', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

console.log("completed");
