// Destructruing Learn:
interface Person {
    name: string;
    age: number;
    address: {
        city: string;
        country: string;
    };
}
const person: Person = {
    name: "Sohel Rana",
    age: 25,    
    address: {
        city: "Dhaka",
        country: "Bangladesh",
    },
};
// Object Destructuring
const { name, address: { city } } = person;
console.log(name); // "Sohel Rana"
console.log(city); // "Dhaka"   

// Array Destructuring
const colors: string[] = ["Red", "Green", "Blue"];
const [firstColor, , thirdColor] = colors;
console.log(firstColor); // "Red"
console.log(thirdColor); // "Blue"  