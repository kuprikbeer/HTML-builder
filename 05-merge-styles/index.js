const fs = require('fs');
const path = require('path');
const styles = path.join(__dirname, 'styles');
const bundle = path.join(__dirname, 'project-dist', 'bundle.css');


fs.readdir(styles, (err, data) => {
    if (err) throw err;
    fs.writeFile(bundle, '', function (err) {
        if (err) throw err;
    });
    for (let i = 0; i < data.length; i++) {
        let current = path.join(styles, `${data[i]}`);
        let ext = path.extname(current);
        if (ext === '.css') {
            fs.readFile(current, 'utf-8', (err, data) => {
                if (err) throw err;
                fs.appendFile(bundle, data, (err) => {
                    if (err) throw err;
                })
            })
        }
    }
}
);