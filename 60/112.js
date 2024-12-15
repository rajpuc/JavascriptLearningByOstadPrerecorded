/**
 * !OOP->all about Class in OOP 
 * Class ki?
 * Jodi erokom hoi surute apni akta blueprint(পরিকল্পনা/ noksha) toiri kore niben then shei blueprint theke apni porobortite jotobar khushi, jekhane khusi object banaben. Tahole ai j object er purboborti obosta jta k amra blueprint/noksha bolci shetai hocce class.
 * Class toiri korer jonno nicher example gula dekho: 
 */

class Person{
    // ai khetre amra property likhar somoy kono keyword jgula variable likhar somoy use kori like var,const,let aigula likhte parbo na.
    first_name="Rajesh";
    last_name = "Pal";
    age=25;
    isBangladeshi=true;
    city="Dhaka";
    // aikhane function likhar time a "function" keyword ta use kora jabe na.   
    getName(){
        return `My name is ${this.first_name} ${this.last_name}`;
    }
}

//So ata hocce object er blueprint r aikhan teke jotokkon porjonto amra object toiri na korci totokkon porjonto amra property gula use korte parbo na.

// Akta jodi blueprint toiri kore thake,tahole oi blueprint teke jotobar khushi totobar object toiri korte parben. 

// So object toiri korte hole: 
let personObj = new Person(); //and aikhane "new" keyword ta hocce optional.
console.log(personObj);
console.log(personObj.first_name);
console.log(personObj.last_name);
console.log(personObj.age);
console.log(personObj.getName());

