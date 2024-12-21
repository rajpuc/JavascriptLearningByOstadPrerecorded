/**
 * ! Futre a jokon tumi porba ata rajesh tokon aikhane serial number ba file er gormil dekhe hoito confused hoye jete paro j aikhane onk missing ace, as ami tmk valo korei cini. So ata akdomi vabbe na. Tumi sobgulai note korteco sudu serial number a golmal kore felco.Baki sob tik e ace.So relax hoye sob poro.
 */

/**
 * ! What is Scope in JavaScript?
 * 1. Scope in JavaScript refers to where variables, functions, and objects are accessible in your code. It determines the "visibility" or "accessibility" of variables.
 * *2. Types of Scope in JavaScript
 * 2.1. Global Scope
 * 2.1.1 Variables declared outside any function or block have global scope.They can  be accessed anywhere in the code.
 * 2.1.2 Example:
 */

let globalVar = "I am global"; // Global variable

function exampleFunction() {
  console.log(globalVar); // Accessible here
}

exampleFunction();
console.log(globalVar); // Accessible here


/**
 * 2.2 Function Scope
 * 2.2.1 Variables declared inside a function are accessible only within that function.This is called function scope.
 *2.2.2 Example:
 */

 function myFunction() {
    let functionVar = "I am inside the function";
    console.log(functionVar); // Accessible here
  }
  
  myFunction();
  console.log(functionVar); // Error: functionVar is not defined

/**
 * 2.3 Block Scope
 * 2.3.1 Variables declared with let or const inside {} (e.g., if, for, or any block) are only accessible within that block.
 * 2.3.2 This is called block scope.
 * 2.3.3 Example:
 */

  if (true) {
    let blockVar = "I am inside the block";
    console.log(blockVar); // Accessible here
  }
  
  console.log(blockVar); // Error: blockVar is not defined

/**
 * *3. Scope Hierarchy (or Chain)
 * 3.1 JavaScript uses a scope chain to resolve variables.
 * 3.2 If a variable is not found in the current scope, JavaScript looks in the outer (parent) scope, all the way up to the global scope.
 * 3.3 Example:
 */
  
let outerVar = "I am in the outer scope";

function innerFunction() {
  let innerVar = "I am in the inner scope";
  console.log(outerVar); // Accessible (found in the outer scope)
  console.log(innerVar); // Accessible (found in the current scope)
}

innerFunction();
console.log(innerVar); // Error: innerVar is not defined


/**
 * * 4.Nested Scopes
 * 4.1 Functions or blocks can be nested, and inner scopes can access variables from their parent scope.
 * 4.2 Example:
 */

let globalVar = "I am global";

function outerFunction() {
  let outerVar = "I am in the outer function";

  function innerFunction() {
    let innerVar = "I am in the inner function";
    console.log(globalVar); // Accessible
    console.log(outerVar); // Accessible
    console.log(innerVar); // Accessible
  }

  innerFunction();
  console.log(innerVar); // Error: innerVar is not defined
}

outerFunction();


/**
 * *5. Key Points to Remember
 *  5.1 Global Scope: Accessible everywhere.
 *  5.2 Function Scope: Limited to the function.
 *  5.3 Block Scope: Limited to the block ({}) when using let or const.
 *  5.4 Scope Chain: JavaScript searches for variables from the innermost scope outward.
 *  5.5 Best Practice: Avoid polluting the global scope by using block and function scopes.
 */

/**
 * *6. What Does "Polluting the Global Scope" Mean?
 
 *  6.1 In JavaScript, variables and functions declared in the global scope (outside of any function or block) are accessible throughout your entire codebase(A codebase refers to the entire collection of source code used to build a software application, program, or project. It includes all the files, directories, and libraries that developers use and maintain to develop the application.). If too many variables are added to the global scope, it can:
 
 *  6.1.1 Increase the Risk of Conflicts: Two scripts or parts of your code may use the same global variable name, leading to unexpected behavior.
 *  6.1.2 Make Debugging Harder: If a global variable is accidentally modified in one part of the code, it can affect other parts, making it difficult to trace bugs.
 *  6.1.3 Impact Performance: The JavaScript engine must check the global scope for variable lookups, which can slightly slow things down if the global scope is cluttered(বিশৃঙ্খল, হুড়াহুড়ি করা, তালগোল পাকাইয়া রাখা).
 
 * *6.2 Best Practice: Use Block and Function Scopes 
 *  6.2.1 To prevent global scope pollution, limit the variables and functions declared in the global scope by using block scopes (let, const) and function scopes.
 

 * *7. How to Avoid Global Scope Pollution?
 *  7.1 Use let and const Instead of var
 *  7.1.1 let and const have block scope, meaning they are limited to the {} block in which they are declared.
 *  7.1.2 This prevents variables from being added to the global scope unintentionally.
 */

  if (true) {
    let blockScoped = "I am block scoped";
    console.log(blockScoped); // Accessible here
  }
  console.log(blockScoped); // Error: blockScoped is not defined
  
  //7.1.3 Contrast with var:
  if (true) {
    var globalScoped = "I am global scoped";
    console.log(globalScoped); // Accessible here
  }
  console.log(globalScoped); // Accessible here (pollutes global scope)

  /**
   * *7.2 Use Functions to Encapsulate Logic
   *  7.2.1 Wrap related logic inside a function so its variables don't leak into the global scope.
   */
    function myFunction() {
        let localVariable = "I am local to this function";
        console.log(localVariable);
    }
    
    myFunction();
    console.log(localVariable); // Error: localVariable is not defined

    //7.2.2 Without the function, the variable would pollute the global scope:

    let globalVariable = "I am global";
    console.log(globalVariable); // Accessible everywhere

    /**
     * *7.3 Use Immediately Invoked Function Expressions (IIFE)
     *  7.3.1 IIFEs execute immediately and create a local scope to contain variables.
     */
    (function () {
        let privateVariable = "I am private";
        console.log(privateVariable);
    })();
      
    console.log(privateVariable); // Error: privateVariable is not defined

    /**
     * *7.4 Group Variables in Objects
     *  7.4.1 Instead of multiple global variables, group them into a single object to reduce clutter.
     */
    const appConfig = {
        apiKey: "12345",
        appName: "MyApp",
        version: "1.0.0",
    };
      
    console.log(appConfig.appName); // Access only via appConfig

    /**
     * *7.5 Use ES6 Modules
     *  7.5.1 Modules (using import and export) automatically create a scoped environment, preventing global scope pollution.
     *  7.5.2 Example:
     */
      // 7.5.3 module1.js:
      export const greet = () => {
        console.log("Hello");
      };
      // 7.5.4 main.js:
      import { greet } from "./module1.js";

      greet(); // Outputs: Hello

      //7.5.5 In this setup, greet is not global; it’s available only when imported.

      /**
       * *7.6 Why Avoid Global Scope Pollution?
       * 7.6.1 Maintain Code Readability : Scoped variables help keep code localized, making it easier to understand and debug.
       * 7.6.2 Prevent Naming Conflicts : In large projects or when using third-party libraries, global variables may accidentally overwrite each other.
       * 7.6.3 Improve Performance : Variables in the global scope take slightly longer to access than scoped variables because the JavaScript engine has to search the entire scope chain.
       */
      
      /**
       * * 8. Summary
       *   8.1 Problem: Global scope pollution causes naming conflicts, hard-to-debug code, and minor performance issues.
       *   8.2 Solution: Use block scope (let, const), functions, IIFEs, objects, and modules to encapsulate variables and limit their visibility.
       *   8.3 Outcome: Cleaner, more maintainable, and conflict-free code.
       */