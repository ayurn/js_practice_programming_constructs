/**
 * 2. Write a program that takes day and month from the command line and 
 * prints true if day of month is between March 20 and June 20, false otherwise.
 */
"use strict";

const prompt = require("prompt-sync")({ sigint: true });

 console.log("\nTo check if day of month given as input by user is between March 20 and June 20:");
 let day = prompt("Enter any day of the month: ");
 let month = prompt("Enter any month of the year: ");
 let check;
 if ((month === "March" && day >= 21 && day <= 31) || (month === "April" && day >= 1 && day <= 30)
     || (month === "May" && day >= 1 && day <= 31) || (month === "June" && day >= 1 && day <= 19))
     check = true;
 else check = false;
 console.log("Day of Month is between March 20 and June 20: " + check);