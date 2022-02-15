const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const port = 3000


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit: '200mb'}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
    var base64Data = req.body["screenshot"].replace(/^data:image\/jpeg;base64,/, "");
    require("fs").writeFile(`${Date.now().toString()}.jpeg`, base64Data, 'base64', function(err) {
    console.log(err);
    });

    const msg = {
        msg: "OK"
    };
    res.send(msg)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})