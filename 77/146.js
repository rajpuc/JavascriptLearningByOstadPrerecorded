/**
 * !Encapsulation Using Constructor Functions
 * So aikhaneo counter er example ta diye amra constructor function diye kivabe encaptulate korte pari sheta dekhbo.
 */

function CreateCounter(){
    let count = 0;
    this.increment =()=>{
        count++;
    }
    this.decrement=()=>{
        count--;
    }
    this.getCount =()=>{
        return count;
    }
  
}

let counter = new CreateCounter();
console.log(counter)
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
counter.decrement();
console.log(counter.getCount());