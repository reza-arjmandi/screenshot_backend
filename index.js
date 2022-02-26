const express = require('express');
const bodyParser = require("body-parser");
const Users = require("./Users.js");
const Save = require("./Persist.js");

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit: '200mb'}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
    Save(req.body["username"], req.body["screenshot"], req.body["deviceid"], req.body["desc"]);
    const msg = {
        msg: "OK"
    };
    res.send(msg)
})

app.post('/auth', (req, res) => {
  const username = req.body["username"];
  const pass = req.body["pass"];
  let success = false;
  if(Users[username]) {
    if(Users[username]["pass"] === pass) {
      success = true;
    }
  }

  const msg = {
      msg: success ? "OK" : "ERR"
  };
  res.send(msg)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})