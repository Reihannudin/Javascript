
function Person(firstName , lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function (name){
        console.log(`Hello ${name}, my name is ${this.firstName}`);
    }
}

Person.prototype.sayGoodbye = function (name){
    console.log(`Good Bye ${name}`);
}

const reihan = new Person("Andrian", "Raihannudin");
reihan.sayHello("Nadia");
reihan.sayGoodbye("Nadia")
console.log(reihan);

const nadia = new Person("Nadia","Fairuzh");
nadia.sayHello("Reihan");
console.log(nadia);