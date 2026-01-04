
// function declaration

// Normal function
// Arrow function



function addNormalFunction(a: number, b: number): number {
    return a + b;
}

addNormalFunction(5, 10); // 15
// addNormalFunction(5, "10"); // 15 // Error: Argument of type 'string' is not assignable to parameter of type 'number'.


const addArrowFunction = (a: number, b: number): number => a + b;

// const addArrowFunction = (a: number, b: number): number => {
//     return a + b;
// }

addArrowFunction(7, 3); // 10
// addArrowFunction(7, "3"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.       


// function with optional parameter
function greet(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    }
    return `Hello, ${name}!`;
}
greet("Sohel"); // "Hello, Sohel!"
greet("Sohel", "Good Morning"); // "Good Morning, Sohel!"  

// function with default parameter
function multiply(a: number, b: number = 2): number {
    return a * b;
}  

multiply(5); // 10
multiply(5, 3); // 15   


// function with rest parameter
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}
sum(1, 2, 3); // 6
sum(4, 5, 6, 7, 8); // 30


// function with void return type
function logMessage(message: string): void {
    console.log(message);
}
logMessage("This is a log message."); // This is a log message.

// function with never return type
function throwError(message: string): never {
    throw new Error(message);
}   
// throwError("This is an error message."); // Uncaught Error: This is an error message.


// function with union types
function formatInput(input: string | number): string {
    if (typeof input === "string") {
        return input.trim().toUpperCase();
    } else {
        return input.toFixed(2);
    }  }
formatInput("  hello world  "); // "HELLO WORLD"
formatInput(3.14159); // "3.14"  


// function with type alias
type User = {
    id: number;
    name: string;
    email: string;
};
function getUserInfo(user: User): string {
    return `ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`;
}
const user: User = { id: 1, name: "Sohel", email: "" };
getUserInfo(user); // "ID: 1, Name: Sohel, Email: " "  


// function with generic types
function identity<T>(arg: T): T {
    return arg;
}      

identity<number>(42); // 42
identity<string>("Hello, TypeScript!"); // "Hello, TypeScript!" 
identity<boolean>(true); // true
identity<Array<number>>([1, 2, 3]); // [1, 2, 3]
identity<{ name: string; age: number }>({ name: "Sohel", age: 25 }); // { name: "Sohel", age: 25 }

