/**
 * !Encapsulation Using ES6 Classes
 * 1. Tik agher example ta diyey amra aikhane dekbo ES6 er class bebohar kore kivabe encapsulation er bishoyta achieve korte pari.
 */

class CreateCounter{
    #count = 0;
    increment(){
        this.#count++;
    }
    decrement(){
        this.#count--;
    }
    getCount(){
        return this.#count;
    }
}

let counter = new createCounter();
counter.increment()
counter.increment()
counter.increment()
counter.increment()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.getCount());
// console.log(counter.#count); // SyntaxError: Private field '#count' must be accessed within its class