// REAL LIFE EXAMPLE: ROAD TRIP
 // Kon kumpleto kami tanan, madayon ang amon nga road trip. 
// Kon hindi kami kumpleto, hindi madayon ang road trip.
  

// Kon ga ulan, hindi na kami mag dayon.
// Kon wala ga ulan, madayon.

// Kon subra na ka init sang panahon, hindi na mag lakat.
// Kon maayo ang panahon, malakat kami.

let kumpletoKami = true;
let gaUlan = false;
let initKaayo = false;

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Kumpleto kamo tanan? (huo/hindi) ", (answer) => {
    kumpletoKami = answer.toLowerCase() === "huo";

    if (kumpletoKami) {
        console.log("Madayon ang amon nga road trip.");

        rl.question("Ga ulan? (huo/wala) ", (answer) => {
            gaUlan = answer.toLowerCase() === "huo";

            if (gaUlan) {
                console.log("Hindi na kami magdayon kay ga ulan.");
                rl.close();
            } else {
                rl.question("Subra ka init ang panahon? (huo/hindi) ", (answer) => {
                    initKaayo = answer.toLowerCase() === "huo";

                    if (initKaayo) {
                        console.log("Hindi na maglakat kay subra ka init.");
                    } else {
                        console.log("Maayo ang panahon, malakat kami.");
                    }

                    rl.close();
                });
            }
        });

    } else {
        console.log("Hindi kami kumpleto, hindi madayon ang road trip.");
        rl.close();
    }
});