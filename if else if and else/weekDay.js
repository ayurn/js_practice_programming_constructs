// 2. Read a number and display the week day (Sunday, Monday,…).

const prompt = require('prompt-sync')({ sigint: true });

console.log("\nEnter a digit to get the week-day:");
const weekNum = Number(prompt("week number: "));
let weekDay;
if (weekNum >= 0 && weekNum <= 6) {
    if (weekNum == 0) weekDay = "Sunday";
    else if (weekNum == 1) weekDay = "Monday";
    else if (weekNum == 2) weekDay = "Tuesday";
    else if (weekNum == 3) weekDay = "Wednesday";
    else if (weekNum == 4) weekDay = "Thursday";
    else if (weekNum == 5) weekDay = "Friday";
    else if (weekNum == 6) weekDay = "Saturday";
    console.log("Your entered number equals the weekday: " + weekDay);
}
else console.log("Invalid user input.");
