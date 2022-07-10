

{

    // Symbol
    const firstName = Symbol("firstName");
    const lastName = Symbol("lastName");

    console.log(firstName === lastName)

    const person = {};
    person[firstName] = "Andrian";
    person[lastName] = "Reihannudin";
    
    console.log(person);
}


{


    // for symbol
    console.log(Symbol.for("firstName") === Symbol.for("lastName"))

    const person = {};
    person[Symbol.for("firstName")] = "Nadia";
    person[Symbol.for("lastName")] = "Fairuzh";

    console.log(person)

}