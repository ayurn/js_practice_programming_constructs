// 4. Write a program that takes user inputs and does unit conversion of different length units. 
// 4.1. Feet to Inch
// 4.2. Feet to Meter
// 4.3. Inch to Feet
// 4.4. Meter to Feet
const prompt = require('prompt-sync')({ sigint: true });

console.log("\nChoose any one of the following conversions:\n1. Feet to Inch\n2. Feet to Meter\n3. Inch to Feet\n4. Meter to Feet");
const convert = Number(prompt("Your choice: "));

switch (convert) {
    case 1:
        console.log("Feet to Inch conversion:");
        const input1 = prompt("Enter feet: ");
        console.log(`${input1} feet = ${input1 * 12} inches`);
        break;
    case 2:
        console.log("Feet to Meter conversion:");
        const input2 = prompt("Enter feet: ");
        console.log(`${input2} feet = ${input2 / 3.2808} meters`);
        break;
    case 3:
        console.log("Inch to Feet conversion:");
        const input3 = prompt("Enter inch: ");
        console.log(`${input3} inches = ${input3 / 12} feet`);
        break;
    case 4:
        console.log("Meter to Feet conversion:");
        const input4 = prompt("Enter inch: ");
        console.log(`${input4} inches = ${input4 * 3.2808} feet`);
        break;
    default: console.log("Invalid choice.");
}