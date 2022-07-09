

function Person(){
    this.firstName = "";
    this.lastName = "" ;

    // make methode in constructor function
    this.sayHello =  function(name){
        console.info(`Hello ${name}, my name is ${this.firstName}`)
    }
}

const reihan = new Person();
// call methode constructor function 
reihan.firstName = "Reihan"
reihan.sayHello("Nadia")
console.log(reihan);

const nadia = new Person();
nadia.firstName = "Nadia"
nadia.sayHello("Reihan")
console.log(nadia);