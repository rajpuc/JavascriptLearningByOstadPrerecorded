/**
*!What is a Closure in JavaScript?
->A closure is a function that "remembers" the variables from its lexical scope (the scope in which it was defined), even after the outer function has finished executing.

->In simpler terms, closures allow a function to access variables from its outer function, even when the outer function is no longer active.

*How Closures Work
->Closures work because JavaScript functions carry with them a reference to their lexical environment (the scope in which they were created). When a function is executed, it looks for variables in its own scope and, if not found, continues searching in its outer scopes.
 */

function outerFunction() {
    let outerVariable = "I am from the outer scope";
  
    function innerFunction() {
      console.log(outerVariable); // Accessing the variable from the outer function
    }
  
    return innerFunction;
}
  
const closureFunction = outerFunction(); // outerFunction executes and returns innerFunction
closureFunction(); // Outputs: "I am from the outer scope"

/**
Step-by-Step Explanation:
    ->outerFunction is called:
        ->A new execution context is created.
        ->outerVariable is declared and assigned "I am from the outer scope".
        ->innerFunction is defined and returned.

    ->closureFunction stores innerFunction:
        ->Even though outerFunction has finished execution, the innerFunction still "remembers" the variable outerVariable from its outer scope due to the closure.
    
    ->When closureFunction() is called:
        ->It executes innerFunction, which accesses outerVariable from the closed-over lexical scope of outerFunction.
*/

/**
Practical Use Cases of Closures
    1. Data Encapsulation (Private Variables)
        ->Closures can be used to create "private" variables that are only accessible through specific functions.
 */
function counter() {
    let count = 0; // Private variable
    
    return {
        increment: function () {
            count++;
            console.log(count);
        },
        decrement: function () {
            count--;
            console.log(count);
        },
    };
}
    
const myCounter = counter();
myCounter.increment(); // Outputs: 1
myCounter.increment(); // Outputs: 2
myCounter.decrement(); // Outputs: 1

//Here, count is private and cannot be accessed directly, but can be modified through the increment and decrement methods.

/**
    2. Function Factories
        ->Closures allow creating multiple functions with shared behavior but independent states.
*/

function createMultiplier(multiplier) {
    return function (value) {
      return value * multiplier;
    };
}

const double = createMultiplier(2); // Multiplier is 2
const triple = createMultiplier(3); // Multiplier is 3

console.log(double(5)); // Outputs: 10
console.log(triple(5)); // Outputs: 15


/**
    3. Callbacks and Event Handlers
        ->Closures are commonly used in event listeners or asynchronous operations. 
*/
function setupClickHandler(buttonId, message) {
    document.getElementById(buttonId).addEventListener("click", function () {
      console.log(message); // Message is "remembered" by the closure
    });
}

setupClickHandler("myButton", "Button clicked!");

/**
Key Points to Remember About Closures
    ->1. Closures Capture Variables, Not Their Values
        ->A closure keeps a reference to the original variable, not a snapshot of its value. 
*/

function createCounters() {
    let count = 0;
  
    return function () {
      count++;
      console.log(count);
    };
}

const counter1 = createCounters();
const counter2 = createCounters();

counter1(); // Outputs: 1
counter1(); // Outputs: 2
counter2(); // Outputs: 1 (independent of counter1)
  
/**
    2.Memory Usage
        ->Because closures keep variables in memory, be cautious of potential memory leaks(
            A memory leak in JavaScript occurs when the program keeps holding references to variables or objects that are no longer needed, preventing the memory they occupy from being freed (garbage collected). Over time, this can cause your program to consume more memory than necessary, leading to performance issues or crashes.
            Fix:
                ->Use null to dereference unused variables.
                ->Clear timers or event listeners when no longer needed.
                ->Avoid excessive use of global variables.
        ) if closures are used excessively.
*/

/**
Summary
    A closure is:
        ->A function with access to its own scope, the scope of the outer function, and the global scope.
        ->Useful for creating private variables, function factories, and handling asynchronous behavior. 
*/