// Primitive

// 👉 Number
// 👉 string
// 👉 boolean
// 👉 null 
// 👉 undefined
// 👉 symbol


// Non Primitive Types
// 👉 object
// 👉 array
// 👉 tuple


// Basic Data Types in TypeScript

// string
let firstName : string = "Sohel"; 

// number
let age : number = 25;

// boolean
let isStudent : boolean = true; 

// undefined
let address : undefined = undefined;

// null
let phoneNumber : null = null;  

let nums:number;
nums = 10;

// array 
let fruits : string[] = ["Apple", "Banana", "Mango"];

// tuple
let person : [string, number] = ["Sohel", 25];

// object
let student : {   
    name: string, 
    age: number, 
    email?: string,   // email is optional
    college:"National Univercity"  //  college is literal type. readonly added this value is fixed
} = { 
      
    name: "Sohel",
    age: 25,
    college:"National Univercity"
};  
