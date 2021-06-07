/**
 * 3. Adding two random Dice numbers
 */
let numberOnFirstDice = Math.floor(1 + (Math.random() * 10) % 6);
let numberOnSecondDice = Math.floor(1 + (Math.random() * 10) % 6);

totalOfTwoDices = numberOnFirstDice + numberOnSecondDice;

console.log("First Dice :"+ numberOnFirstDice + "\nSecond Dice :"+ numberOnSecondDice +"\nTotal of two Dices is :" + totalOfTwoDices);
