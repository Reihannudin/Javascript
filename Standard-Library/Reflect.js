
    const person = {};

    Reflect.set(person, "firstName", "Andrian");
    Reflect.set(person, "lastName", "Raihannudin");

    console.info(person);

    console.info(Reflect.get(person, "firstName"));
    console.info(Reflect.get(person, "lastName"));

    console.info(Reflect.has(person, "firstName"));
    console.info(Reflect.has(person, "middleName"));
    console.info(Reflect.has(person, "lastName"));
