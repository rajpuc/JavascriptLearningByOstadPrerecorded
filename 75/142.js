//!Rajesh tmr jonno msg: aikhane and er agher kicu lectuer er j note sob ami nijer teke poreci,Rabbil bro aigula porai nai.So don't get confused jokon tumi aigula future a porba.
/**
*! differences between var, let, and const in JavaScript:
1. Scope
    ->var:
        ->Function-scoped: It is limited to the function in which it is declared.
        ->If declared outside a function, it becomes globally scoped.
        ->It ignores block scope, so it is accessible even outside {} blocks (like if or for blocks).

*/
if (true) {
    var x = 10;
}
console.log(x); // Outputs: 10 (block scope is ignored)
/**
    ->let:
        ->Block-scoped: It is limited to the block ({}) where it is declared.
*/
if (true) {
    let y = 20;
}
console.log(y); // Error: y is not defined
/**
    ->const:
        ->Also block-scoped, just like let. 
*/
  

/**
2. Re-declaration
    ->var:
        ->Can be re-declared in the same scope. 

            var z = 30;
            var z = 40; // No error
    ->let:
        ->Cannot be re-declared in the same scope.

            let a = 50;
            let a = 60; // Error: Identifier 'a' has already been declared
    ->const:
        ->Cannot be re-declared in the same scope, just like let.
*/
/**
3. Initialization
    ->var:
        ->Can be declared without being initialized.

            var b;
            console.log(b); // Outputs: undefined
    ->let:
        ->Can also be declared without being initialized.

            let c;
            console.log(c); // Outputs: undefined
    ->const:
        ->Must be initialized at the time of declaration.

            const d; // Error: Missing initializer in const declaration
            const d = 70; // Correct

*/


/**
4. Hoisting    
->Hoisting is the behavior where variable declarations are moved to the top of their scope before execution.
    ->var:
        ->Is hoisted but initialized as undefined.

            console.log(h); // Outputs: undefined
            var h = 140;

    ->let and const:
        ->Are hoisted but remain in a "temporal dead zone" until the declaration is encountered.
        ->Accessing them before declaration causes a ReferenceError.

            console.log(i); // Error: Cannot access 'i' before initialization
            let i = 150;



*/