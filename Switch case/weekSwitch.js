// 2. Read a number and display the week-day (Sunday, Monday,…)
const prompt = require('prompt-sync')({ sigint: true });

console.log("\nEnter a digit to get the week-day:");
const weekNum = Number(prompt("week number: "));
let weekDay;
switch (weekNum) {
    case 0: weekDay = "Sunday"; break;
    case 1: weekDay = "Monday"; break;
    case 2: weekDay = "Tuesday"; break;
    case 3: weekDay = "Wednesday"; break;
    case 4: weekDay = "Thursday"; break;
    case 5: weekDay = "Friday"; break;
    case 6: weekDay = "Saturday"; break;
    default: console.log("Invalid user input.");
}
console.log("Your entered number equals the weekday: " + weekDay);