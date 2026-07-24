// Road Trip Upod ang Barkada//

// Kon may motor, ma-upod ako sa road trip.
// Kon wala motor, hindi ako ma-upod.

// Kon kumpleto kami tanan, madayon ang amon nga road trip.
// Kon hindi kami kumpleto, hindi madayon ang road trip.

// Kon hindi maglakat ang isa, sugaton namon siya sa ila balay.

// Kon ga ulan, hindi na kami mag dayon.
// Kon wala ga ulan, madayon.

// Kon subra na ka init sang panahon, hindi na mag lakat.
// Kon maayo ang panahon, malakat kami.


let mayMotor = true;
let kumpletoKami = true;
let mayHindiMakalakat = false;
let gaUlan = false;
let initKaayo = false;

// Kon may motor, ma-upod ako sa road trip.
if (mayMotor) {
    console.log("Kon may motor, ma-upod ako sa road trip.");
} else {
    console.log("Kon wala motor, hindi ako ma-upod.");
}

// Kon kumpleto kami tanan, madayon ang amon nga road trip.
if (kumpletoKami) {
    console.log("Kon kumpleto kami tanan, madayon ang amon nga road trip.");
} else {
    console.log("Kon hindi kami kumpleto, hindi madayon ang road trip.");
}

// Kon hindi maglakat ang isa, sugaton namon siya sa ila balay.
if (mayHindiMakalakat) {
    console.log("Kon hindi maglakat ang isa, sugaton namon siya sa ila balay.");
}

// Kon ga ulan, hindi na kami magdayon.
if (gaUlan) {
    console.log("Kon ga ulan, hindi na kami magdayon.");
} else {
    console.log("Kon wala ga ulan, madayon.");
}

// Kon subra na ka init sang panahon, hindi na maglakat.
if (initKaayo) {
    console.log("Kon subra na ka init sang panahon, hindi na kami maglakat.");
} else {
    console.log("Kon maayo ang panahon, malakat kami.");
}


// Final decision
if (mayMotor && kumpletoKami && !gaUlan && !initKaayo) {
    console.log("FINAL DECISION: Madayon ang road trip!");
} else {
    console.log("FINAL DECISION: Hindi madayon ang road trip.");
}