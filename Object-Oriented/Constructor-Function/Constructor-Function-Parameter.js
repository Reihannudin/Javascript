
function Person(firstName , lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function (name){
        console.log(`Hello ${name}, my name is ${this.firstName}`);
    }
}

const reihan = new Person("Andrian", "Raihannudin");
reihan.sayHello("Nadia");
console.log(reihan);

const nadia = new Person("Nadia","Fairuzh");
nadia.sayHello("Reihan");
console.log(nadia);