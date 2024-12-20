/**
 * ! OOP -> Inheritance
 * 1.Inheritance shobder bangla meaning hocce uttoradhikar. uttoradhikar niye jodi amra aktu alochona kori- tahole babar uttoradhikar k?->cele. tai uttoradhikar shutre babar joto properties royece, joto shomppoti royece shegula putro pabe. Programming er khetreo erokom jokon baba celer moto akta uttoradhikar shomporko toiri hoi tokon sheta k amra boli inheritance.
 * 2.Inheritance valovabe bujar jonno akta best example baba celer niye niche dewa holo: 
 */

/*
class Father{ //3. Class er naming convention holo 1st character capital lekha.


}

class Son{

}*/
//4. ai obostai dui class er majhe kono uttoradhikar er shomporko nei. Akn ai 2 class er maje uttoradhikarer shomporko toiri korer jonno:
class Father{ 
    num1=10;
    num2=20;
    addNumber(){
        let sum = this.num1 + this.num2;
        console.log(sum);
    }
}
class Son extends Father{ //5. uttoradhikar er shomporko toiri korte hoi namer maddhome. Jemon Rabbil hasan er Cheler nam unar namer teke extend kore Salif hasan rakhai akta pitha puthrer shomporko toiri hoyece.Tik akivabe amader child class k extend korte hobe tar parent theke taholei inheritance toiri hobe. And Uttoradhikar/ inheritance er shomporko hoye gele tahole amra parent class er properties and methods gular access peye jabo child theke. 

}

//6. akn jodi amra Son class er object toiri kori.

let SonObj = new Son();
console.log(SonObj) //7. Son uttoradhikar shutre ja ja peyce sob consolelog a dekhabe.
//8. akn uttoradhikar shutre Son jehetu sob peye gece tai son akn shegula k use o korte parbe.
SonObj.addNumber();
console.log(SonObj.num1 * SonObj.num2);  