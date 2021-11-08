
const fs = require('fs');
const path = require('path');
const copyDirPath = path.join(__dirname, 'files-copy');
const currentDirPath = path.join(__dirname, 'files');

function createDir() {
    fs.mkdir(copyDirPath, { recursive: true }, function (err) {
        if (err) throw err;
    });
    fs.readdir(copyDirPath, function (err, files) {
        if (err) throw err;
        for (let i = 0; i < files.length; i++) {
            let copyPath = path.join(copyDirPath, `${files[i]}`);
            fs.unlink(copyPath, err => {
                if (err) throw err;
            })
        }
    })
}
createDir();

function copyDir() {
    fs.readdir(currentDirPath, function (err, files) {
        if (err) throw err;
        for (let i = 0; i < files.length; i++) {
            let copyPath = path.join(copyDirPath, `${files[i]}`);
            let currentPath = path.join(currentDirPath, `${files[i]}`);
            fs.copyFile(currentPath, copyPath, (err) => {
                if (err) throw err;
            })
        }
    }
    )
}
copyDir();