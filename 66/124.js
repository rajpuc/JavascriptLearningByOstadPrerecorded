/**
*!OOP- Static Keyword
*Static keyword er maddhome amra kono class er object create kora charai oi class er properties gula access korte pari.
*/

// class Person{
//     first_name = "Jhon";
//     last_name = "Smith";
//     getName(){
//         return `My name is ${this.first_name} ${this.last_name}`;
//     }
// }

//1. ai obostai amra jodi ai Person class er kono properties use korte chai tahole amader k first a Person class er object create kore nite hobe.

//2. Akn amra jodi chai Person class er kono properties ba method k without creating object use korbo tahole amader k j properties ba methods access korte chacci shegular shamne "static" keyword use korbo.

class Person{
    static first_name = "Jhon";
    last_name = "Smith";
    static getName(){
        return `My name is ${this.first_name} ${this.last_name}`;
    }
}

console.log(Person.first_name);
console.log(Person.getName());

// 3. Akn question hocce why static? -> Specific vabe bolte gele prothome bolbo hocce shared properties. Means dorun apner akta class er moddhe onkgula choto choto method royece. Akn ai method gular moddhe kicu method/properties jodi amn hoi vibinno jaigai proyojon hocce.Tokon nischoy apni chaiben na j oi method ta k aber likhun ba oi class er object create kore tarpor oi method k use korun. Ai shob jamela erate apni oi method / properties k static kore din and then jkhane proyojon proe shekhane call kore use korun.
//-> 2nd reason er khetre bolte hoi -> Utility Functions. Doren form validation kora,data validation kora, choto choto utility function jemon try catch use kore rest api call hoyece kina?,akta chotto get method niye kaj kora, post method er kaj, akta token encode kora ba decode kora -> ai doroner bibinno utility functions akta application a thakte pare.To onk gula ulity fuction niye jodi apni akta class toiri koren. Nischoi tokon puro class er object ta apner bar bar proyojon hobe na.Shei utility method gular bibinno somoy bibinno jaigai apner proyoujon hobe.Shekhetre apni static bebohar korte paren beboharer shubidhar jonno.
//-> acharao memory efficiency er jonno apni static use korte paren.