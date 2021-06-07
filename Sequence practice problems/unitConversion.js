/**
 * 5. Unit Conversion
 * a. 1ft = 12 in then 42 in = ? ft
 */
 let oneFeet = 12;
 let result = 42/oneFeet ;
 console.log("42 inches : " + result + "ft");
 
 
 // 5b. Rectangular Plot of 60 feet * 40 feet in meters
 let meter = 40 * 60 * 0.3048;
 console.log("Rectangular Plot in meters : " + meter);
 
 //c. Calculate area of 25 such plots in acres
 let totalArea = 60 * 40 * 0.3048 * 25 * 0.00024711;
 console.log("Area of 25 rectangular Plots in acres : " + totalArea);