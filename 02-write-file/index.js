const path = require('path');
const fs = require('fs');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const stream = fs.WriteStream((path.join(__dirname, 'text.txt')));
const rl = readline.createInterface({ input, output });

function message() {
    rl.question('Напишите хоть что-нибудь... ', function (answer) {
        if (answer === 'exit') {
            rl.close();
        } else {
            stream.write(`\n${answer}`)
            moreMessage()
        }
    })
}
message();

function moreMessage() {
    rl.question('Хотите что-нибудь добавить? ', function (answer) {
        if (answer === 'exit') {
            rl.close();
        } else {
            stream.write(`\n${answer}`)
            moreMessage()
        }
    })
}
process.on('exit', () => {
    console.log('Спасибо, заходите еще!')
})