class User {

    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value){
        const result = value.split(" ");
        this.firstName = result[0]
        this.lastName = result[1]
    }

}

const user = new User("Andrian","Raihannudin")
console.log(user)
// use getter
console.log(user.fullName)

// use setter 
user.fullName = "Nadia Fairuzh"
console.log(user)
