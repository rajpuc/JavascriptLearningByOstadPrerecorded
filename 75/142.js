/**
 * !1.What is Hoisting in JavaScript?
 * 1.1 Hoisting is JavaScript's default behavior of moving declarations (of variables, functions, or classes) to the top of their scope(variable ta j scope a ace shetar surute(top a) niye jai) before code execution.
 * 1.2 This means you can use a variable or function before it is declared in the code, but the behavior depends on how the variable or function is declared (var, let, const, or function).
 */


/**
 * *2.How Hoisting Works
 * 2.1 Only Declarations Are Hoisted
 * 2.1.1 For variables, only the declaration (e.g., var x;) is hoisted, not the initialization (e.g., x = 5;).
 * 2.2 Behavior Depends on Declaration Type
 * 2.2.1 var declarations are hoisted and initialized with undefined.
 * 2.2.2 let and const are hoisted but are not initialized (they stay in a "temporal dead zone" until the declaration is reached).
 [
    Temporal Dead Zone: The TDZ is the period of time between the start of the scope and the point where the variable is declared and initialized. During this time:

    The variable exists in memory.
    Any attempt to access the variable (read or write) will result in a ReferenceError.
 ]
 * 2.2.3 Function declarations are fully hoisted.
 * 2.2.4 Function expressions are treated like variables (hoisted as undefined).
 */
 

 /**
  * 3. Examples of Hoisting
  * 3.1  Variable Hoisting with var
  */
  console.log(a); // Outputs: undefined (declaration is hoisted, but not initialization)
  var a = 10;
  console.log(a); // Outputs: 10

  //3.1.1 Behind the scenes, JavaScript interprets it as:
  var a;
  console.log(a); // undefined
  a = 10;
  console.log(a); // 10

  /**
   * 3.2 Variable Hoisting with let and const
   * 3.2.1 let and const are hoisted but not initialized. Accessing them before the declaration causes a ReferenceError.
   */

  console.log(b); // Error: Cannot access 'b' before initialization
  let b = 20;
  
  console.log(c); // Error: Cannot access 'c' before initialization
  const c = 30;

  /**
   * 3.2.2 Behind the scenes:
   * 3.2.2.1 The declarations of let b and const c are hoisted, but they remain in the temporal dead zone until the code execution reaches the line where they are declared.
   */

  /**
   * 4. Function Hoisting
   * 4.1 Function declarations are fully hoisted, so you can call a function before it is defined.
   */

greet(); // Outputs: "Hello!"

function greet() {
  console.log("Hello!");
}

//4.2 Behind the scenes:
//4.2.1 The entire function is moved to the top:

function greet() {
    console.log("Hello!");
}
greet(); // "Hello!"

//4.2.2 However, function expressions (using var, let, or const) are treated as variables and are not fully hoisted.

sayHello(); // Error: sayHello is not a function
var sayHello = function () {
  console.log("Hi!");
};

/**
 * 5.Class Hoisting
 * 5.1 Classes are hoisted but not initialized. Accessing them before their declaration results in a ReferenceError.
 */
const obj = new MyClass(); // Error: Cannot access 'MyClass' before initialization
class MyClass {
  constructor() {
    this.name = "Test";
  }
}
/**
 * *6.Key Points to Remember
 *  6.1 var: Hoisted and initialized with undefined.
 *  6.2 let and const: Hoisted but in a temporal dead zone (not accessible until the declaration line).
 *  6.3 Function Declarations: Fully hoisted and can be used before declaration.
 *  6.4 Function Expressions and Classes: Hoisted but not initialized, leading to errors if accessed before declaration.
 */

//7.Why Does Hoisting Exist?
//7.1 Hoisting allows the JavaScript engine to allocate memory for variables and functions before executing the code. This enables flexible coding but can lead to unexpected behavior if not well understood.