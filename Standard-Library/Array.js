{

// array loop
const array = ["Jin","Suga","J-Hope","RM","Jimin","V","Jungkook"]

// make looping with anonymous function
array.forEach(function(value , index){
    console.log(`${index} : ${value}`)
})

// make looping with arrow function
array.forEach((value, index) => console.info(`${index} : ${value}`));
// make looping with arrow function
array.forEach(value => console.info(value)); 

}

{

    // array queue
    const queue = [];

    queue.push("Jin")
    queue.push("Suga")
    queue.push("J-Hope")
    queue.push("RM")

    console.info(queue.shift());
    console.info(queue.shift());
    console.info(queue.shift());
    console.info(queue.shift());

}

{
    // array stack

    const stack = [];

    stack.push("Jin")
    stack.push("Suga")
    stack.push("J-Hope")
    stack.push("RM")

    console.info(stack.pop());
    console.info(stack.pop());
    console.info(stack.pop());
    console.info(stack.pop());

}

{
    // array search

    const source = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

    console.info(source.find(value => value > 3));
    console.info(source.findIndex(value => value > 3));
    console.info(source.includes(7));
    console.info(source.indexOf(5));
    console.info(source.lastIndexOf(5));

}

{

    // array filter

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const ganjil = numbers.filter(value => value % 2 === 1);
    const genap = numbers.filter(value => value % 2 === 0);

    console.info(numbers);
    console.info(ganjil);
    console.info(genap);

}

{

    // array transform

    const names = ["Andrian","Raihannudin"];
    const namesUpper = names.map(value => value.toUpperCase());
    console.info(namesUpper);

    const namesReduce = names.reduce((before, value) => before + " " + value);
    console.info(namesReduce);

    const namesRight = names.reduceRight((before, value) => before + " " + value);
    console.info(namesRight);

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const total = numbers.reduce((before, value) => before + value);
    console.info(total);

}