

class Employee{
    sayHello(name){
        console.log(`Hello ${name}, my name is employee ${this.name}`);
    }
}

class Manager extends Employee {
    sayHello(name){
        console.log(`Hello ${name}, my name is manager ${this.name}`);
    }
}

const reihan = new Manager();
reihan.name = "reihan";
reihan.sayHello("Nadia")

const nadia = new Employee()
nadia.name = "Nadia"
nadia.sayHello("Reihan")