/**
 * ! OOP- Getter and Setter Methods
 * getter er maddhome amra kono property er value k ber kore ante pari.
 * setter er maddome amra kono property er value set korte pari.
 */

// 1. say amra akta product er class make korbo.
class Product{
    //2. dorun ai product er price namer kono property set kora nai.So akn amader target hocce amn akta method toiri kora jta kina aikhane akta product er price namer akta property set korte pare and tar value o set korte pare. Er process niche dekhano holoo:
    set SetPrice(value){
        //2.1 ai method er suruthe ami akta keyword set koreci jta hocce set. Atar means atai darai j Product namer object er Class/Blueprint amra toiri korte colechi shei class er bitore akta property set kora. And this method is called setter method.
        //2.2 "this" run time(code run korer somoy) a j object create hocce sheta k refer kore.  
        this.price = value;
    }

    // 3.akn amra j property ta set koreci shei property ta pete chai. Er jonno :
    get GetPrice(){
        return this.price;
    }
}

// 4. akn getter and setter niye kaj korer jonno nicher example gula follow korte paro:
let ProductObj = new Product();
// 5. ai obostai amra jodi ProductObj k consolelog kori tahole faka object paba caue amra akono porjono setter function call korine property set koranor jonno.
console.log(ProductObj);
//!5.1 Remember amra j setPrice er j setter method use korci tar value assign er somoy function call er moto kore use korte parbo na.
//!5.2 getter er khetre o takhar as a property er moto kore use korte hobe.  
ProductObj.SetPrice=1000;
// 6. Akn jodi amra ProductObj k consolelog kori taholi kintu amar price property k dekhte pabao.
console.log(ProductObj);
console.log(ProductObj.GetPrice);