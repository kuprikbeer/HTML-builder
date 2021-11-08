const path = require('path');
const fs = require('fs');
const dirPath = path.join(__dirname, 'secret-folder');
fs.readdir(dirPath, (err, data) => {
    if (err) throw err;
    for (let i = 0; i < data.length; i++) {
        let ext = path.extname(`${data[i]}`)
        let name = path.basename(`${data[i]}`, ext)
        let current = path.join(dirPath, `${data[i]}`);
        fs.stat(current, (err, stat) => {
            if (err) throw err;
            if (stat.isFile()) {
                console.log(name + '-' + ext.substring(1) + '-' + stat.size / 1024 + ' kb');
            }
        });
    }
});