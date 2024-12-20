/**
 * !OOP -> Overriding
 * 1. Overriding meaning hocce existing kicu k change kora. Akn chinta koren babar sompotti chele jodi uttoradhikar shutre peye jai. Tahole cele chaile oi shomppoti k probiorton korte pare.Ai j kono kicu k poriborton kora -> shetai hocce overriding OOP er khetre.
 */

class Father{
    addNumber(){
        let num1=10;
        let num2= 20;
        console.log(num1 + num2);
    }
} 
class Son extends Father{
    //2. Akon Son jehetu uttoadhikar shutre Father er addNumber() method ta peye gece akn son chaile sheta k poriborton korte pare:
    addNumber(){
        let num1=100;
        let num2= 200;
        console.log(num1 + num2);
    }
    //3. so as u can see: Son addNumber method er variable er value k change korece tar mane method k change korlo tai amra bolte method override korece.
}

let SonObj =new Son();
SonObj.addNumber();//4. amra aikhane celer kora changed method tai pabo, babar ta pabo na.