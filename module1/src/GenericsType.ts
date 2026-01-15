// Learn Generics Type

type GenericArray = Array<number>;

const numbers: GenericArray = [1, 2, 3, 4, 5];
 
// Dynamic generics type 
type GenericArrayType<T> = Array<T>;

const strings: GenericArrayType<string> = ["hello", "world"];
const booleans: GenericArrayType<boolean> = [true, false];

// Generic Tuple 
type GenericTuple<X, Y> = [X, Y];

const tuple1: GenericTuple<number, string> = [1, "one"];
const tuple2: GenericTuple<boolean, number> = [true, 0];
const tuple3: GenericTuple<string, string> = ["foo", "bar"];
const tuple4: GenericTuple<number, number> = [10, 20];
console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(strings); // Output: ['hello', 'world']
console.log(booleans); // Output: [true, false]
console.log(tuple1); // Output: [1, 'one']
console.log(tuple2); // Output: [true, 0]
console.log(tuple3); // Output: ['foo', 'bar']
console.log(tuple4); // Output: [10, 20]    

