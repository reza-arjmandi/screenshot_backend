const fs = require('fs')
const tmpData = fs.readFileSync('data/users.json', {encoding:'utf8', flag:'r'});
const tmpJSON = JSON.parse(tmpData);
module.exports = tmpJSON;
