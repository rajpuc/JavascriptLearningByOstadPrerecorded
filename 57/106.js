 /**
         * !OOP-> Object create kora shikbo by object literal
         * What is Object?
         * -> Kono akta kicur j bochishto gula k eksathe lekhar j prokriya shetai object.
         * How to write object using Object literal?
         * ->Dorun amk ami as a object hishebe js er moddhe likhe felbo. Tahole kivabe likbo:
        */
 let person ={
    first_name: "Rajesh ",
    last_name: "Pal",
    age:25,
    city: "Rangamati"
   }
   // ai j amr shomporkito onkgula totto group kore rekhe dilam, ai grouptai object and grouping korer prokriyatai hocce object toiri kora. Ai style tai object literal.

    // object er moddhe caile j kono doroner data type er data rakte pari. Not only that amra caile akta anonymous/arrow function rekehe dite pari.
    
    let person1 ={
        first_name: "Rajesh ",
        last_name: "Pal",
        age:25,
        city: "Rangamati",
        isBangladeshi: true,
        // say amr function first name and last name niye console log korbe.Akn sha jokon data gula k nibe tokon ai object er bitor tekei to nibe taina! To object er bitor tekei kono akta data k pick kore, object er bitorei abr kono akta function ba property er moddhe use korte chai tahole object er name diye property ta k call kora lagbe.
        getName:()=>{
            return `My name is ${person1.first_name} ${person1.last_name}`;
        }
    }
    //object k use korbo nicher dekhano niyome
    console.log(person1.getName());
    console.log(person1)
    console.log(person1.isBangladeshi)
    console.log(person1.first_name)
    console.log(person1.last_name)
    console.log(person1.age)