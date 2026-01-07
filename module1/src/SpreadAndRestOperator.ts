// Spread operator
// Rest operator
// Destructuring


// Learning Spread operator

const frnd1:string[]=["Sohel", "Raju", "Kamal"];
const frnd2:string[]=["Rahim", "Karim", "Salam"];

const allFriends:string[]=[...frnd1, ...frnd2, "Jamal", "Babul"];
console.log(allFriends); // ["Sohel", "Raju", "Kamal", "Rahim", "Karim", "Salam", "Jamal", "Babul"] 

// Learn  Rest operator 
function createFullName(firstName: string, lastName: string, ...titles: string[]): string {
    return `${firstName} ${lastName}, ${titles.join(" ")}`;
}   
const fullName = createFullName("Sohel", "Rana", "Mr.", "DEV");
console.log(fullName); // "Sohel Rana, Mr. DEV" 