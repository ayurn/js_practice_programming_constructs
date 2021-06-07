// 3. Write a program that takes a year as input and outputs the year is a Leap Year or not a Leap Year.
// A Leap Year checks for 4-digit Number, divisible by 4 and not 100 unless divisible by 400.

"use strict";

const prompt = require("prompt-sync")({ sigint: true });

console.log("\nEnter a 4-digt year to check if Leap Year or not:");
const year = Number(prompt("Enter year: "));
if (year >= 1000 && year <= 9999) {
    if ((year % 4 === 0 && year % 100 != 0) || (year % 400 === 0)) console.log("It's a leap year.");
    else console.log("It's a non-leap year.");
}
else console.log("User-input is not a 4-digit year.");