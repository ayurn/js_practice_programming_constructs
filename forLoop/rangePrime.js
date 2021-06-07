// 4. Extend the program to take a range of numbers as input and output the prime-numbers in that range.
const prompt = require('prompt-sync')({ sigint: true });

console.log("\nTo determine all prime numbers in a user-given number range:\nEnter only positive integer number-range:");
const low = Number(prompt("Enter lower limit: "));
const high = Number(prompt("Enter higher limit: "));
if (low <= high && low > 0 && Number.isInteger(low) && Number.isInteger(high)) {
    console.log("Prime numbers in this range:");
    for (let i = low; i <= high; i++) {
        let isPrime = true;
        if (i == 1) isPrime = false;
        for (let j = 2; j <= i / 2; j++) {
            if (i % j == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) console.log(i);
    }
} else console.log("Invalid user number-range input.");
