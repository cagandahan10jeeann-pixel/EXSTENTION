//index.js

const input = require('./input');
const gala = require('./flow');

async function primaryFnc(){
    console.log('Welcome sa Gala Event!');

    const bati = await input.question ('my invitation card? ');

    console.log ("Hello " + "kamusta" + "kayo!");

    if (bati == "may ara" ) {
        gala.enjoy();
    }
    else {
        console.log ("sorry you are not allowed to enter the gala event!");
    }

    input.close()
}

primaryFnc();
