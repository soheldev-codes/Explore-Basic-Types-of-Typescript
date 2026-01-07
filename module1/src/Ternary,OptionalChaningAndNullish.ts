// Ternary Operator, Optional Chaining, and Nullish Coalescing in TypeScript
// Ternary Operator
const age: number = 20;
const canVote: string = age >= 18 ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // Output: Yes, you can vote.

// Optional Chaining
type User = {
    name: string;
    address?: {
        street: string;
        city: string;
    };
};
const user1: User = { name: "Alice" };
const user2: User = {
    name: "Bob",
    address: { street: "123 Main St", city: "Wonderland" },
};
console.log(user1.address?.street); // Output: undefined
console.log(user2.address?.street); // Output: 123 Main St  

// Nullish Coalescing
function getDisplayName(user: { displayName?: string | null }): string {
    return user.displayName ?? "Guest User";
}
console.log(getDisplayName({ displayName: "Charlie" })); // Output: Charlie
console.log(getDisplayName({ displayName: null })); // Output: Guest User
console.log(getDisplayName({})); // Output: Guest User
