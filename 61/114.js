/**
 * !Class redeclare korer kuti nati.
 * nicher example gula poro taholei bujbe.
 */

/*

class Person{
    num1=10;
    num2=20;
    addTwoNum(){
        return this.num1 + this.num2;
    }
}

class Person{
    num1=10;
    num2=20;
    addTwoNum(){
        return this.num1 + this.num2;
    }
}

// apni cailei 2ta class eki name a uporer moto kore likte parben na.
// akn tumi jodi Person er akta instance make koro like:

let personObj = new Person();

console.log(personObj.addTwoNum());
// and ata k akn run korale compiler confuse hoye jabe, j addTwoNum() k tumi call korco sheta kar function Person 1st tar naki 2nd tar. Aijonno sha error throw korbe.

*/



// !Another way to define a class is by using a class expression.



let Person = class {
    num1=10;
    num2=20;
    addTwoNum(){
        return this.num1 + this.num2;
    }
}


let Person = class {
    num1=10;
    num2=20;
    addTwoNum(){
        return this.num1 + this.num2;
    }
}

// actually ai niyome o class redeclare kora jabe na. Eikhane o error throw korbe. 