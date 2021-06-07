// 2. Find the magic number:
// 2.a. Ask the user to think of a number n between 1 to 100.
// 2.b. Then check with the user if the number is less then n/2 or greater.
// 2.c. Repeat till the magic number is reached.
const prompt = require('prompt-sync')({ sigint: true });

let low = 1, high = 100, n, p, x;
console.log("\nThink of an integer between 1 to 100 in your mind (call it magic number(n)).");
while (low != high) {
    p = parseInt(low + high);
    if (p % 2 == 0) n = p / 2;
    else n = (p - 1) / 2;
    console.log("Make a choice.\n1. Your choice is equal to " + n + "\n2. Your choice is less than " + n + "\n3. Your choice is greater than " + n);
    x = Number(prompt("Enter your choice: "));
    switch (x) {
        case 1: {
            console.log("The magic number is " + n + " !");
            low = high = n;
            break;
        }
        case 2: {
            high = n;
            p = parseInt(low + high);
            if (p % 2 == 0) n = p / 2;
            else n = (p - 1) / 2;
            break;
        }
        case 3: {
            low = n;
            p = parseInt(low + high);
            if (p % 2 == 0) n = p / 2;
            else n = (p - 1) / 2;
            break;
        }
        default: console.log("Invalid choice!");
    }
}