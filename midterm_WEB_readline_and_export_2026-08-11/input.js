//input.js

const readline = require('node:readline');

const ask = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function question(msg) {
    return new Promise((resolve) => {
        ask.question(msg, (answer) => {
            resolve(answer);
        });
    });
}

function close(){
    ask.close();
}

module.exports = {question, close};