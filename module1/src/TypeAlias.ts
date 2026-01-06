// Type Alias


type UserID = string | number;
type User = {
    id: UserID;
    name: string;
    email: string;
    contactNumber?: string;
};
const user1: User = {
    id: 101,
    name: "Sohel Rana",
    email: "sohel@example.com",
    contactNumber: "0123456789",
};
const user2: User = {
    id: "U202",
    name: "Raju Karim",
    email: "raju@example.com",
};
console.log(user1);
console.log(user2);