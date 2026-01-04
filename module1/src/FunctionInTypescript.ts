
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


