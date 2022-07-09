

class Counter{

    #counter = 0;

    incerment(){
        this.#counter++;
    }

    decerment(){
        this.#counter--;
    }

    get(){
        return this.#counter;
    }
}

const counter = new Counter();
counter.incerment();
counter.incerment();
counter.incerment();
counter.incerment();
counter.incerment();


console.log(counter.get());