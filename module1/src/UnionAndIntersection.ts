// Union Types 
type StringOrNumber = string | number;

function displayValue(value: StringOrNumber): void {        
    console.log("Value:", value);
}

displayValue("Hello"); // "Value: Hello"
displayValue(42);      // "Value: 42"
// Intersection Types
type Person = {
    name: string;
    age: number;
};
type Employee = {
    employeeId: number;
    department: string;
};
type EmployeeDetails = Person & Employee;
const employee: EmployeeDetails = {
    name: "Sohel Rana",
    age: 25,
    employeeId: 12345,
    department: "Development",
};
console.log(employee);
// { name: 'Sohel Rana', age: 25, employeeId: 12345, department: 'Development' }    
