

class Talk {

    say(name){
        if(name){
            this.#sayWithName(name);
        } else{
            this.#sayWithoutName();
        }
    }

    #sayWithName(name){
        console.log(`Hello ${name}`)
    }

    #sayWithoutName(){
        console.log("Hello")
    }
}


const talk = new Talk();
talk.say("Reihan")
talk.say()