
    {
        // object freeze & seal

        const person = {
            firstName: "Andrian",
            lastName: "Reihannudin"
        };

        Object.freeze(person);
        // Object.seal(person);

        person.firstName = "Nadia";
        person.middleName = "Fairuzh";
        delete person.lastName;

        console.info(person);
    }

    {

        // object assign

        const target = {
            firstName: "Nadia"
        };
        const source = {
            lastName: "Fairuzh"
        };

        Object.assign(target, source);
        console.info(target);
        console.info(source);

    }

    {

        // Object property name & value

        const person = {
            firstName: "Andrian",
            lastName: "Raihannudin"
        };

        console.info(Object.values(person));
        console.info(Object.getOwnPropertyNames(person));

    }