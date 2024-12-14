/**
 * !OOP-> Object creation using  Object constructor
 * * Amra jokon ai prokriyay obj toiri korbo tokon jei name a amra obj toiri korte cholechi shei name amra akta function toiri kore nibo:
 */

function person(){
    //akn object er moddhe property assign korte hobe. Assign korer jonno jta korte hobe:
    this.first_name="Rajesh"; //aikhane this keyword ta shei object k refer korce jake amra create korci.
    this.last_name="Pal";
    this.age= 24;
    this.isBangladesh= true;
    this.getName=()=>{
        return `My name is ${this.first_name} ${this.last_name}`;
    }
}

// akhon question hocce amra object take use korbo kivabe. Function k call kore dile ki amader object create hoye jabe? -> answer hocce na.

// So aikhe use korte hole er instance create korte hobe like below. and again new keyword is optional in js.

let personInstance = new person();
console.log(personInstance);
console.log(personInstance.first_name);
console.log(personInstance.age);
console.log(personInstance.getName());