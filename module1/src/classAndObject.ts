// class and Object

// class ManInfo {
//     name: string;
//     email: string
//     constructor(name: string, email: string) {
//         this.name = name;
//         this.email = email
//     }
//     makeSentence() {
//         console.log(`my name id ${this.name} and my email is ${this.email}`);
//     }
// }

// const Employee = new ManInfo("sohel", "Example@email.com")



// Parameter Propertice

class ManInfo {
    constructor( public  name: string, public email: string){}
}

const Employee = new ManInfo("sohel", "Example@email.com")
