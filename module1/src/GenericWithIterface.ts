// Learn interface Generic 
interface GenericIdentityFn<T> {
    (arg: T): T;
}
function identity<T>(arg: T): T {
    return arg;
}
let myIdentity: GenericIdentityFn<number> = identity;

console.log(myIdentity(42)); // Output: 42
let myIdentityString: GenericIdentityFn<string> = identity;
console.log(myIdentityString("Hello, Generics!")); // Output: Hello, Generics!  
console.log(myIdentityString("Hello, Generics!")); // Output: Hello, Generics!

// Generic interface with multiple types    
interface GenericPair<X, Y> {
    first: X;
    second: Y;
}   
const example1: GenericPair<number, string> = { first: 1, second: "one" };
const example2: GenericPair<boolean, number> = { first: true, second: 0 };     
const example3: GenericPair<string, string> = { first: "foo", second: "bar" };
const example4: GenericPair<number, number> = { first: 10, second: 20 };   
console.log(example1); // Output: { first: 1, second: 'one' }
console.log(example2); // Output: { first: true, second: 0 }
console.log(example3); // Output: { first: 'foo', second: 'bar' }
console.log(example4); // Output: { first: 10, second: 20 }    
