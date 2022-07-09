 

class Person{
    constructor(name){
        this.name = name;
    }

    sayHello(name){
        console.log(`Hello ${name}, my name is ${this.name}`);
    }
}

const reihan = new Person("Reihan");
console.log(reihan);

const nadia = new Person("Nadia");
nadia.sayHello("Reihan");