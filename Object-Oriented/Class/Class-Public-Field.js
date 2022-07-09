

class Customer {

    // make public field
    firstName;
    lastName;
    balance = 0;

    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello() {

    }
}

const customer = new Customer();
console.log(customer)
