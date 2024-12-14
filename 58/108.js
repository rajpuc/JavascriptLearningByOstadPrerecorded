/**
 * ! OOP-> creating object using instance of Object
 */

let person = new Object(); //atakei bole muloto object er instance toiri kora. Cause "new" keyword use e hoi kono class er instance/object toiri korar khetre.
// JS er khetre new keyword ta optional . Ata diteo paren na o dite paren.
// Ai process a object er property add korte hobe nicher example onujayi:

person.first_name= "Rajesh";
person["last_name"] = "Pal";
person.age=25;
person.city="Rangamati";
person.isBangladeshi=true;
person.getName=()=>{
    return `My name is ${person.first_name} ${person.last_name}`;
}

//object k j niyomei create kora hok na kno! object k use korer niyom sob khetre ekirokom.
console.log(person);
console.log(person.getName());
console.log(person.age);
console.log(person.city);
console.log(person["city"]);