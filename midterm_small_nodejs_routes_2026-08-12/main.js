const routes = require('./routes.json');
const tourism = require('./tourism');
const readline = require('readline');

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Welcome to the Tourism!");
console.log("1. Guide");
console.log("2. Exit");

input.question("Choose your choice: ", (choice) => {

    if (choice === "1") {

        
        if (routes.tourism) {
            tourism(routes.tourism);
        } else {
            console.log("Tourism guide not found.");
        }

    } else if (choice === "2") {

        console.log("Thank you for coming!");

    } else {

        console.log("Invalid choice.");

    }

    input.close();
});