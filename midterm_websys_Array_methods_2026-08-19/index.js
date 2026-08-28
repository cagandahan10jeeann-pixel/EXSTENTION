const users = [
    { name: "Jee", age: 20, status: "active" },//
    { name: "Kyle", age: 17, status: "active" },
    { name: "Tharen", age: 22, status: "inactive" },//
    { name: "Rhycel", age: 19, status: "active" }//
];

// MAP - ginagamit mag kwa sang data halin sa array
const names = users.map(user => user.name);

console.log("All Users:");
console.log(names);

// FILTER - ginagamit para pilion lang ang mga data nga naga-meet sa condition. ang mga users nga 18 pataas
const adults = users.filter(user => user.age >= 18);

console.log("\nUsers 18 years old and above:");
console.log(adults);
