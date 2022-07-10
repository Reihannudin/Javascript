
{

    const person = {
        firstName : "Andrian",
        middleName : "",
        lastName : "Reihannudin",
        address : {
            country:"Indonesia",
            city : "Tangerang"
        },
        hobbies : [
            "Coding","Game","Traveling"
        ]
    };

    // json to string
    const json = JSON.stringify(person)
    console.log(json)

    // string to JSON
    const jsonObject = JSON.parse(json)
    console.log(jsonObject)
}