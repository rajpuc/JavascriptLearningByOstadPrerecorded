/**
 * ! 1. What is Execution Context in JavaScript?
 * 1.1 An execution context is an environment in which JavaScript code is evaluated and executed. It keeps track of the variables, functions, and the value of this at any given point in a program.
 * 1.2 Types of Execution Context
 * 1.2.1 Global Execution Context (GEC)
 * 1.2.1.1 Created when the script starts running.
 * 1.2.1.2 Manages the global scope and any variables or functions declared outside functions.
 * 1.2.1.3 Sets "this" to the global object[Shoja kothai this window(browser a)/global(node.js a) k refer kore.] (window in browsers or global in Node.js).["এই কোডে this কে গ্লোবাল অবজেক্টের সাথে সংযুক্ত করা হয় (ব্রাউজারে এটি window, আর Node.js-এ এটি global)।"]
 
[
    ->In JavaScript, the "this" keyword refers to the context in which a piece of code is executed. When we say, "Sets "this" to the global object (window in browsers or global in Node.js)," we mean that:

        ->In the global scope (code that is not inside any function or object), this points to the global object:

            ->In browsers: The global object is window.
            ->In Node.js: The global object is global.


 
 */
//->Global Object Example

//->In Browsers:
console.log(this); // Outputs the 'window' object
//->In Node.js:
console.log(this); // Outputs the 'global' object
/**
->Why is This Important?
    ->When this is set to the global object, any variable or function defined using this becomes a property of the global object.
    ->Example in Browsers:
*/

this.globalVar = "I am global"; // Adds 'globalVar' to the global object (window)

console.log(window.globalVar); // Outputs: "I am global"
console.log(this.globalVar);   // Outputs: "I am global"

/** 
->Inside Functions (Non-Strict Mode)
    ->If a regular function is invoked in the global scope (not as part of an object), this will also point to the global object.
*/

function globalFunction() {
    console.log(this); // 'this' refers to the global object (window in browsers)
}
globalFunction(); // Outputs: window

/** 
->Strict Mode and this
    ->If you use strict mode ('use strict';), the behavior of this changes. In strict mode, when code is executed in the global scope or in a standalone function, this is undefined instead of the global object.
*/

"use strict";

function strictFunction() {
  console.log(this); // 'this' is undefined
}

strictFunction(); // Outputs: undefined
// ->This is safer because it prevents accidental modifications to the global object.

/**
 -> Summary of this in the Global Context
 
    ->In Browsers (Non-Strict Mode):
        ->In the global scope, this refers to the window object.
        ->Inside a regular function called in the global scope, this also refers to window.
    ->In Node.js (Non-Strict Mode):
        ->In the global scope, this refers to the global object.
        ->Inside a regular function, this still refers to global.
    ->In Strict Mode:
        ->In the global scope or a standalone function, this is undefined.

 ->By understanding this, you can avoid unintentionally modifying the global object and write safer, cleaner code. Let me know if you'd like further clarification!

]
 */

/**
 * 1.2.2 Function Execution Context (FEC)
 * 1.2.2.1 Created every time a function is invoked.
 * 1.2.2.2 Manages the local scope of the function, including parameters and local variables.
 * 1.2.3 Eval Execution Context (Rarely Used)
 * 1.2.3.1 Created when code is executed inside an eval() statement
 */


/**
 * 2. Components of an Execution Context
 * 2.1 Every execution context has three key parts: 
 * 2.1.1 Variable Environment
 * 2.1.1.1 Stores variables and function declarations within the context.
 * 2.1.1.2 Handles variable hoisting.
 * 2.1.2 Lexical Environment
 * 2.1.2.1 Determines the scope and accessibility of variables/functions based on their position in the code.
 * [
->What is Lexical Scope in JavaScript?
    ->Lexical scope is the definition area of an expression.
    ->In other words, an item's lexical scope is the place in which the item got created.
    
    NOTE:
    ->Another name for lexical scope is static scope.
    ->The place an item got invoked (or called) is not necessarily the item's lexical scope. Instead, an item's definition space is its lexical scope.

    ->Example of Lexical Scope
    ->Consider the code below:

    // Define a variable in the global scope:
    const myName = "Oluwatobi";

    // Call myName variable from a function:
    function getName() {
        return myName;
    }
    
    ->In the snippet above, notice that we defined the myName variable in the global scope and called it in the getName() function.
    ->Question: Which of the two spaces is myName’s lexical scope? Is it the global scope or the getName() function’s local scope?
    ->Answer: Remember that lexical scope means definition space — not invocation space. Therefore, myName’s lexical scope is the global scope because we defined myName in the global environment.

    ->Another example of lexical scope

    function getName() {
        const myName = "Oluwatobi";
        return myName;
    }
    
    ->Question: Where is myName’s lexical scope?

    ->Answer: Notice that we created and called myName within getName(). Therefore, myName’s lexical scope is getName()’s local environment because getName() is myName’s definition space.



->How Does Lexical Scope Work?
    ->A JavaScript expression’s definition environment determines the code permitted to access it.

    ->In other words, only code within an item's lexical scope can access it.

    ->For instance, consider the code below:

    // Define a function:
    function showLastName() {
        const lastName = "Sofela";
        return lastName;
    }

    // Define another function:
    function displayFullName() {
        const fullName = "Oluwatobi " + lastName;
        return fullName;
    }

    // Invoke displayFullName():
    console.log(displayFullName());

    // The invocation above will return:
    Uncaught ReferenceError: lastName is not defined


    ->Notice that the invocation of displayFullName() in the snippet above returned an Uncaught ReferenceError. The error returned because only code within an item's lexical scope can access the item.

    ->Therefore, neither the displayFullName() function nor its internal code can access the lastName variable because lastName got defined in a different scope.

    ->In other words, lastName’s lexical scope is different from that of displayFullName().

    ->lastName’s definition space is showLastName() while displayFullName()’s lexical scope is the global environment.

    ->Now, consider this other code below:

    function showLastName() {
        const lastName = "Sofela";
        return lastName;
    }

    // Define another function:
    function displayFullName() {
        const fullName = "Oluwatobi " + showLastName();
        return fullName;
    }

    // Invoke displayFullName():
    console.log(displayFullName());

    // The invocation above will return:
    "Oluwatobi Sofela"


    ->In the snippet above, displayFullName() successfully returned "Oluwatobi Sofela" because displayFullName() and showLastName() are in the same lexical scope.

    ->In other words, displayFullName() could invoke showLastName() because the two functions are both defined in the global scope.


    SOURCE:https://www.freecodecamp.org/news/javascript-lexical-scope-tutorial/
 * ] 
 * 2.1.2.2 Contains a reference to the parent scope for resolving variables outside the current context.
 * 2.1.3 This Binding
 * 2.1.3.1 Defines the value of this in the current execution context.
 */

/**
 * 3. Execution Context Lifecycle
 * 3.1 Creation Phase
 * 3.1.1 Memory is allocated for variables and functions.
 * 3.1.2 Variables declared with var are initialized to undefined.
 * 3.1.3 Functions are hoisted and stored in memory.
 * 3.1.4 let and const are hoisted but are not initialized (in the "temporal dead zone").
 * 3.1.5 "this" is set based on how the context is invoked.
 * 3.2 Execution Phase
 * 3.2.1 The code is executed line by line.
 * 3.2.2 Variables are assigned values, and function calls are made.
 */

//3.3 Example: Global and Function Execution Context

//3.3.1 Global Execution Context is created
var a = 10;

function outerFunction() {
  var b = 20;

  function innerFunction() {
    var c = 30;
    console.log(a); // Accesses variable from global scope
    console.log(b); // Accesses variable from outerFunction
    console.log(c); // Accesses variable from innerFunction
  }

  innerFunction(); //3.3.3 Creates a new Function Execution Context for innerFunction
}

outerFunction(); //3.3.2 Creates a Function Execution Context for outerFunction


/**
    3.3.4 Step-by-Step Execution
    ->Global Execution Context (GEC)
        ->Creation Phase:
            -> a is initialized to undefined.
            -> outerFunction is stored in memory.
        ->Execution Phase:
            -> a is assigned 10.
            -> outerFunction is invoked, creating a Function Execution Context (FEC).
    ->Function Execution Context for outerFunction
        ->Creation Phase:
            ->b is initialized to undefined.
            ->innerFunction is stored in memory.
        ->Execution Phase:
            ->b is assigned 20.
            ->innerFunction is invoked, creating another FEC.
    ->Function Execution Context for innerFunction
        ->Creation Phase:
            ->c is initialized to undefined.
        ->Execution Phase:
            ->c is assigned 30.
            ->console.log statements are executed, resolving variables using the scope chain.

 */

/**
    3.3.5 Call Stack and Execution Context
    ->JavaScript uses a call stack to manage execution contexts. The current execution context is always at the top of the stack.
    ->For the above example, the call stack works like this:

        ->Initial Call Stack
            ->Global Execution Context (GEC).
        ->When outerFunction is called
            ->A new Function Execution Context (FEC) is created and pushed onto the stack.
        ->When innerFunction is called
            ->Another FEC is created and pushed onto the stack.
        ->When innerFunction finishes
            ->Its context is popped from the stack.
        ->When outerFunction finishes
            ->Its context is popped from the stack.
        ->When Global Execution finishes
            ->Its context is popped from the stack.
 */

/**
4.Key Points to Remember
4.1 Each Function Call Creates a New Execution Context
    ->Every function has its own local scope and execution context.
4.2 Scope Chain
    ->If a variable is not found in the current context, JavaScript looks in the parent context using the scope chain.
4.3 Global Context is Created First
    ->This initializes the global scope and sets up the base environment.
4.4 Call Stack Manages Execution
    ->JavaScript uses a stack to keep track of the active execution context.
*/