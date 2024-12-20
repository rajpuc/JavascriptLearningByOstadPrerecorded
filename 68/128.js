/**
 * !OOP - Inheritance Constructor
 * 1.First example dekbo: Constructor sudu parent class a ace but child class a nai.
 */
/*
class Father{
    constructor(){
        console.log("I am constructor of father class");
    }
}
class Son extends Father{
    //2. Jodi amnta hoi parent a constructor ace but child a nai. Tahole parent to pabei pabe, uttoradhikar shutre child o peye jabe.
}

new Father();//3. Object create er sathe sathe constructor ta call hoye jabe parent er.
new Son()//4. As child uttoradhikar shutre tar parent er sob kicu peye jabe tai Son er obj create er sathe sathe parent er constructor call hoye jabe.
*/

//5. Akn dekha jak jodi parent class er constructor parameter nei tahole shekhane parameter kivabe pass hobe :
/*

class Father{
    constructor(msg){
        console.log(msg);
    }
}
class Son extends Father{
    
}

new Father("This is constructor params from parent");
new Son("This is constructor params from child")
*/

// 6. So aikhane amra dekhte pacci father er constructor er bitorer parameter father and child uboi e korte parbe.

// 7. Akn dekha jak constructor sudu child class a ace.

/*
class Father{
    
}
class Son extends Father{
    constructor( ){
        //8. Akhane apni chaile child a shorashori constructor class rakte parben na. Er jonno apner teke parent class er permission nite hobe. R permission niben super() method k call kore.Akhane super() k call kora chara child constructor create korte parbe na.
        
        super(); 
        //8.1 Use Cases of super:

        //8.1.1Calling the Parent Class Constructor
        //In a subclass constructor, super() must be called to invoke the parent class's constructor.
        //This is required when using extends to inherit from another class.
        
        //8.1.2 Calling a Parent Class Method
        //Inside a subclass method, super.methodName() can be used to call a method defined in the parent class.
        console.log('This is constructor params from child');
    }
}

//9. akn question hcce amra sudu child er moddhe kono constructor rakhle sheta ki parent bebohar korte parbe?
new Father();//10. run korale kono o/p dekte paba na. Tar mane child er kono kicui parent pabe na.
new Son();//11. constructor jehetu child er kace ace tai sheta chele pabe.

*/
//12. Akn dekha jak child er constructor prameter recieve korle ki hobe:

/*
class Father{
    
}
class Son extends Father{
    constructor(mag){
        super();
        console.log(msg);
    }
}

new Son('This is constructor params from child'); */

//13. So as you can see jehetu constructor child a ace and child er kono kicui parent pai na tai amra sudu matro child er obj create er somoy e parameter pass korte parbo.


//14. Akn cholen parent and child uboi class er moddhe constructor reke dekha jak:

/*
class Father{
    constructor(){
        console.log("This is constructor from parent class");
    }
}
class Son extends Father{
    constructor(){
        super();
        console.log("This is constructor from child class");
    }
}

//15. ai khetre jeta hobe: father er constructor father er moto kore kaj korbe and Son er constructor son er motoi kaj korbe.
new Father();
new Son();

*/

//16. akn dekha jak jodi parent and child uboi er consturctor parameter recieve kore tahole ki gotbe:

/*
class Father{
    constructor(msg_father){
        console.log(msg_father);
    }
}
class Son extends Father{
    constructor(msg_son){
        super();
        console.log(msg_son);
    }
}

new Father("I am parent class constructor");
new Son("Message parameters from child constructor");
*/
/* 17. ai obotai(super a kono kicu pass kore ne) ama der o/p hobe: 
I am parent class constructor
undefined 
Message parameters from child constructor
*/
//18. as you can see in the o/p undefined dekacce majkane. Tar karon amra jokon Son er obj create koreci tokon to parent er constructor o call hocce . Jehetu tokon amra parent er constructor a kono parameter pass kori nai tai undefined dekacce.


class Father{
    constructor(msg_father){
        console.log(msg_father);
    }
}
class Son extends Father{
    constructor(msg_son){
        super(msg_son);
        console.log(msg_son);
    }
}

new Father("I am parent class constructor");
new Son("Message parameters from child constructor");

/*19. akn jehetu amra bole dici parent er constructor  child teke call hole ki parameter jabe tai o/p hobe:
I am parent class constructor
Message parameters from child constructor
Message parameters from child constructor
*/
//20. dektei pacco child er object create er somoy jokon parent er constructor call hocce tokon amra j bole diyechi childer constructor j msg parameter recive korce shetao parent a pass hobe tai console a o shetai dekte pacci.