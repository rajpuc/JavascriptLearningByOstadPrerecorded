/**
*! Encapsulation Using Closures
*1.Dorun ami akta counter create korbo:
    ->jetar initial value thakbe 0.
    ->Counter er value increment and decrement korbo.
    ->counter er value get korbo.
*1.1 So aikhane 3 ta action thakbe r counting er jonno akta data thakce.
*Akn ai sobgula k ami grouping kore rakte rakbo like below:
*/

function createCounter(){
    let count = 0; //1.3.2
    return {
        increment: function (){ //1.3.2
            count++;
        },
        decrement: function(){ //1.3.2
            count--;
        },
        getCount: function(){ //1.3.2 so aikhane ami korlam ki amer data k and data related action k ami akta group er moddhe niye ashlam. Fole inner complexity manage hoye gelo, data protection hoye gelo, access control hoye gelo and aikhane code gula onk beshi maintable and readable hoye gelo.
            return count;
        }
    }
    //1.2 ai j onkgula action k ami bind kore return kore dilam, ai process tai hocce closure.And ai closures er maddhomei amder countinger jonno j data dorkar,actions dorkar shegula k grouping korci, data protection dicci, access control nicci. Ete kore 3ta action e guchano obostai thakbe.Thats why code er maintainability bere jabe.Orthad encapsulation er j bishoyti sheta achieve hobe.
    
    /*1.3 Tahole keyal kore dekhen encapsulation er j shorto cilo:
        1.3.1 data and action k group kore fela
        1.3.2. So ami aikhane encaptualation er j bochishto shegula aikhane achieve korlam.
        1.3.3 keep in mind amra kintu ai function er baire r count k access korte parbo na.
    */
}

//1.4 Tahole ai j code amra likheci shei process takei amra bolic encapsulation.

//1.5 Now question hocce counter k kivabe use korte pari? er jonno first a amader object make korte hobe:

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
counter.decrement();
console.log(counter.getCount());

//1.6 So in this way using js closure amra encapsulation korte pari.
