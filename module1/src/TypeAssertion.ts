// Type Assertion Example

let someValue: unknown = "This is a string";

// Using type assertion to specify that someValue is a string
let strLength: number = (someValue as string).length;   
console.log(`The length of the string is: ${strLength}`);

