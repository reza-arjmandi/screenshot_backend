const fs = require('fs');
const dayjs = require('dayjs');

function CreateDirIfNotExists(dir){
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
}

function Save(username, screenshot, deviceid, desc) {
    CreateDirIfNotExists(`./data/${username}`);
    CreateDirIfNotExists(`./data/${username}/${deviceid}`);

    let now = dayjs();
    today = now.format("YYYY-MM-DD");
    const dir = `./data/${username}/${deviceid}/${today}`;
    CreateDirIfNotExists(dir);

    const time = now.format("HH-mm-ss");
    var base64Data = screenshot.replace(/^data:image\/jpeg;base64,/, "");
    fs.writeFile(`${dir}/${time}.jpeg`, base64Data, 'base64', function(err) {
        if(err) console.log(err);
    });
    fs.writeFileSync(`${dir}/description.txt`, desc, {encoding: "utf8"});
}

module.exports = Save;
