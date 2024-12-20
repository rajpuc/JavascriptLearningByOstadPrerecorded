/**
 * ! Inheritance Static Properties
 * 1. ata example er maddome buja jak:
 */

class Father{
   static greetParent(){
        return "Hello i am the parent!";
    }
}

class Son extends Father{
    greetChild(){
        return "Hello, I am the Son!";
    }
}

console.log(Son.greetParent());
//2.as you can see amra parent er static method k child teke child er object create kora chara call korte parbo.    