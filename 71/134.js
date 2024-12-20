/**
 * ! Method Overloading
 * 1. same namer method jokon ami same class a rekhe dite cacci tokon ai rakhar processkei amra bolci method overloading.
 * 2.nicher example ta kheal koro:
 */


/*
class MyClass{
    myMethod(p1,p2){

    }
    myMethod(p1,p2,p3){
        //3. Jokon kina akoi namer alada alada method rakhar proyojon pore tokon tader parameter er shonkha chanage kore rakthe hoi. And ai parameter koita diye call korci shetar upor base kore repective method call hobe.
        //4. onnano programming languge er khetre amra data type change kore o ai method overloading er beparta achieve korte pari.
        //5. JS a overloadin er behavior onnano programming language er moto noi.
        //6. Js a shorashori overloading er support ta nai.
        //7.But apni still ai method overloading er bishoita js a o achieve korte paren, koita parameter patiyecen shei bishoi ta examin korer maddhome.
    }
}
*/
//8. Now let's see js a kivabe amra koita parameters patiyci shetar upor depend kore method overloading er beparta achieve korte apri.
class MyClass{
    myMethod(p1,p2,p3){
        if(arguments.length === 1){
            console.log("Recieved one arguments:",p1);
        }else if(arguments.length === 2){
            console.log("Recieved two arguments:",p1,p2);
        }else if(arguments.length === 3){
            console.log("Recieved three arguments:",p1,p2,p3);
        }

        //9. aivabei amra method overloading er beparta achieve korte pari js a.
    }
    
}

let MyClassObj = new MyClass();

MyClassObj.myMethod(10);
MyClassObj.myMethod(10,20);
MyClassObj.myMethod(10,20,30);