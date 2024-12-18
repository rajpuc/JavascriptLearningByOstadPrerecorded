/**
 * !Change class properties value using constructor
 */

class Person{
    num1 = 10;
    num2 = 20;
    // 1. Aikhane num1 & num2 er value fix kore dewa. 

    // 3. So num1 & num2 er value constructor diye change korer process niche dekhano holo:
    constructor(num1,num2){
        this.num1 = num1;
        this.num2 = num2;
    }

    addTwoNumer(){
        return this.num1 + this.num2;
    }
}

// 2. amra chaile ai Person class er object create korer somoy argument pass koriye consturctor er help niye num1 and num2 er value change korte pari.
/*let PersonObj =new Person();
console.log(PersonObj.addTwoNumer());
*/
// 4.akhon amra chaile object create er somoy argument pass korate parbo.

let PersonObj2 = new Person(300,700);
console.log(PersonObj2.addTwoNumer());