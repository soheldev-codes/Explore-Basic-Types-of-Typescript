// Type vs Interface 

// Type Alias Example
type PersonType = {
    name: string;
    age: number;
};
const person1: PersonType = {
    name: "sohel",
    age: 25
};
console.log(`Person Type - Name: ${person1.name}, Age: ${person1.age}`);    


// Interface Example
interface PersonInterface {
    name: string;
    age: number;
}
const person2: PersonInterface = {
    name: "Rana",
    age: 25
};
console.log(`Person Interface - Name: ${person2.name}, Age: ${person2.age}`);


// two another type to merge one type 
type AddressType = {
    street: string;
    city: string;
};  
type ContactType = {
    email: string;
    phone: string;
};  
type EmployeeType = PersonType & AddressType & ContactType;
const employee1: EmployeeType = {
    name: "sohel",
    age: 25,
    street: "123 Main St",
    city: "Dhaka",
    email: "sohel@example.com",
    phone: "123-456-7890"
};
console.log(`Employee Type - Name: ${employee1.name}, Age: ${employee1.age}, Street: ${employee1.street}, City: ${employee1.city}, Email: ${employee1.email}, Phone: ${employee1.phone}`);
// two another interface to merge one interface
interface AddressInterface {
    street: string;
    city: string;
}
interface ContactInterface {
    email: string;
    phone: string;
}

interface EmployeeInterface extends PersonInterface, AddressInterface, ContactInterface {}
const employee2: EmployeeInterface = {
    name: "Rana",
    age: 30,
    street: "456 Market St",
    city: "Chittagong",
    email: "rana@example.com",
    phone: "987-654-3210"
};
console.log(`Employee Interface - Name: ${employee2.name}, Age: ${employee2.age}, Street: ${employee2.street}, City: ${employee2.city}, Email: ${employee2.email}, Phone: ${employee2.phone}`);




