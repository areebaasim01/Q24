// 24.	More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

// equality nd inequality

let mobile: string = "Iphone";
let mobile1: string = "Vivo";

console.log(mobile === mobile1);
console.log(mobile !== mobile1);



// lowercasefunction

const variable: string = "Hello guys";
console.log(variable.toLowerCase() === "hello guys");



// equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

const num1: number =  20;
let num2: number = 10;

console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);


// Tests using "and" and "or" operators

let statement: boolean = true;
let statement1: boolean = false;
console.log(statement && statement1);
console.log(statement || statement1);


// Test whether an item is in a array
// Test whether an item is not in a array

let vegatables: string[] = ["Carrot", "Pies", "Gabbage", "Bringale",]
console.log(vegatables.includes("Cucumber"));
console.log(vegatables.includes("Carrot"));