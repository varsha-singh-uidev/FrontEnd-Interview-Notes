## Interview Questions ##

Interviewer: What is a scripting language?
You: A scripting language is a programming language that doesn’t need to be compiled into machine code first. Instead, it’s interpreted line by line when the program runs. This makes it easier to write small programs quickly, automate tasks, and add features to websites or applications. Examples include JavaScript, Python, and PHP.
 
Interviewer: Can you explain client-side scripting? 
You: Client-side scripting means the code runs in the user’s browser, on their computer. It’s mainly used to make web pages interactive and responsive. For example, when you click a button and the page changes instantly without reloading, that’s client-side scripting. JavaScript is the most common language here. It handles things like form validation, animations, and dynamic page updates.

Interviewer: And what about server-side scripting?
You: Server-side scripting runs on the web server before the page is sent to the browser. It’s used for tasks that need access to databases or secure information. For example, when you log in to a website, the server-side script checks your username and password against the database. Languages like PHP, Python, Ruby, and Node.js are often used.

Interviewer: So what’s the main difference between the two? 
You: Client-side scripting focuses on what the user sees and interacts with directly in their browser. Server-side scripting focuses on behind-the-scenes work like storing data, processing requests, and sending back results.

Interviewer: Why does console.log(5 + "2") give "52"?
You: In JavaScript, the + operator is special. If one of the values is a string, JavaScript converts the other value into a string too and then concatenates them. So 5 becomes "5", and "5" + "2" results in "52".

Interviewer: Then why does console.log(5 - "2") give 3? 
You: Unlike +, the - operator only works with numbers. So JavaScript tries to convert both values into numbers. "2" becomes 2, and 5 - 2 gives 3.

Interviewer: How do you check if a value is NaN in JavaScript? You: There are two main ways:
1.	Using isNaN(value) → Converts the value to a number first, then checks if it’s NaN.
              isNaN("hello"); // true             isNaN(123);  // false
2.	Using Number.isNaN(value) → This is stricter. It only returns true if the value is exactly NaN.
     Number.isNaN(NaN); // true    Number.isNaN("hello"); //false

Interview: What values are considered falsy in JavaScript? 
You: false, 0, "", null, undefined, NaN

Interviewer: What is the difference between null and undefined in JavaScript?
You: undefined → It means a variable has been declared but not assigned any value yet. 
let x;
console.log(x); // undefined
•	null → It is an intentional empty value. Developers assign null to show that a variable should be empty. 
let y = null;
console.log(y); // null

Interview: What is the output of typeof function() {}?
You: "function"

Interviewer: How do you convert a number to a string in JavaScript? 
You:
•	Using .toString() method:
let num = 123;
console.log(num.toString()); // "123"
•	Using String() function:
String(123); // "123"
•	Or by concatenating with an empty string:
123 + ""; // "123"

Interviewer: And how do you convert a string to a number? 
You:
•	Using Number() function:
Number("123"); // 123

•	Using parseInt() for integers:
parseInt("123"); // 123
•	Or with the unary + operator:
+"123"; // 123

Interview: What is short-circuit evaluation? 
You: Logical operations stop once the result is known: 
true || anything → true 
false && anything → false

Interviewer: What is an expression in JavaScript?
You: An expression is any piece of code that produces a value. It can be as simple as a number or a string, or more complex like a function call.
Examples:
5 + 3        // produces 8
"Hello"      // produces "Hello"
greet("Varsha") // produces whatever the function returns

Interviewer: And what is a statement in JavaScript?
You: A statement is a complete instruction that tells the program to do something. It may contain expressions, but its purpose is to perform an action.
Examples:
let x = 5; // variable declaration statement
if (x > 3) {// if statement
  console.log("Hi"); // statement inside block
}

Interviewer: What is eval() used for in JavaScript? 
You: The eval() function is used to execute a string of JavaScript code. If you pass a string into eval(), JavaScript treats it like actual code and runs it.
Math.floor() → always rounds down to the nearest integer.
Math.ceil() → always rounds up to the nearest integer.
Math.round() → rounds to the nearest integer (≥ .5 goes up, < .5 goes down)

Q: What is string interpolation?
A: Embedding variables inside strings using template literals.
Interviewer: What is Symbol used for in JavaScript? 
You: Symbol is a primitive data type introduced in ES6. It’s used to create unique identifiers for object properties.
•	Key points:
1.	Every Symbol value is guaranteed to be unique, even if they have the same description.
const s1 = Symbol("id");    const s2 = Symbol("id");
console.log(s1 === s2); // false
2.	Symbols are often used as object keys to avoid property name conflicts.
3.	They are not enumerable in for...in loops, which makes them useful for hidden or internal properties.

Interviewer: What is the Temporal Dead Zone (TDZ) in JavaScript? 
You: The Temporal Dead Zone (TDZ) is the period between when a variable is hoisted into scope and when it is initialized. During this time, the variable exists but cannot be accessed — trying to use it will throw a ReferenceError.

Interviewer: What is the result of 0 / 0 in JavaScript? 
You: The result is NaN (Not a Number).
•	Division by zero is undefined.
•	Since 0 / 0 doesn’t make mathematical sense, JavaScript returns NaN.

Interviewer: What is the result of 10 / 0 in JavaScript? 
You: The result is Infinity.
•	JavaScript follows IEEE 754 floating point rules.
•	Dividing a positive number by zero gives positive infinity.
console.log(10 / 0); // Infinity
console.log(-10 / 0); // -Infinity

Interviewer: What is a literal in JavaScript? 
You: A literal is a fixed value written directly into the source code. It represents data exactly as it is, without needing variables or expressions ex 10, “hello” or true.

Q: What is operator precedence? 
A: The order in which operators are evaluated.

Interviewer: What is the comma operator in JavaScript? 
You: The comma operator (,) allows you to evaluate multiple expressions in a single statement, and it returns the value of the last expression.
•	Used to separate expressions where only one is expected.
•	All expressions are evaluated from left to right, but only the result of the last one is returned.
Example:- let x = (1, 2, 3);  console.log(x);

Interviewer: What is the nullish coalescing operator (??) in JavaScript? 
You: It only checks for null or undefined (not falsy values like 0, "", or false). If the left hand side is null or undefined, it returns the right hand side. Otherwise, it returns the left hand side.
Example:-  let name = null;        let defaultName = "Guest"; console.log(name ?? defaultName); 
Difference from || (OR operator)
•	|| returns the right hand side if the left is falsy (0, "", false, null, undefined).
Example:-  console.log(0 || 10); // 10

Interviewer: What is a compound expression in JavaScript? 
You: A compound expression is an expression that combines multiple simple expressions into one, usually using operators like arithmetic, logical, or the comma operator. The whole expression evaluates to a single value.
// Arithmetic compound expression     let result = (2 + 3) * 4;  
// Logical compound expression
let isValid = (age > 18) && (status === "active");  
// Comma operator compound expression
let x = (1, 2, 3);  
console.log(x); // 3 (evaluates all, returns last)

Interviewer: Can operators be overloaded in JavaScript? 
You: No, JavaScript does not support operator overloading.

Interviewer: What happens if you use const in a loop in JavaScript? 
You: const means the variable binding cannot be reassigned.
•	A loop like for..loop tries to reassign the loop variable each iteration.
•	That clashes with const →  TypeError.
const i = 0;
for (i = 0; i < 3; i++) {//  Error: Assignment to const variable
  console.log(i);
}
So: you cannot reuse a const variable across loop iterations.
Second case: const declared inside the loop block
•	Each iteration creates a new block scope.
•	That means a fresh const variable is declared every time.
for (let j = 0; j < 3; j++) {
  const x = j;   // new const each iteration
  console.log(x);  }   // Output: 0, 1, 2

Interviewer: Can while be used to wait in JavaScript?
You: Technically yes, but it’s not recommended.
•	A while loop can be written to “wait” until a condition becomes true.
•	But JavaScript is single threaded (it runs on one main thread).
•	If you use while to wait, it blocks the entire thread, freezing the page or application until the loop ends.
•	This means no other code, events, or UI updates can run during that time.
Example = console.log("start");
let i = 0;  while (i < 300000) { i++; }
console.log("End");
Correct Way to Wait
Instead of blocking with while, use asynchronous methods like setTimeout, setInterval, or Promises/async-await.

Interviewer: Can you break from a nested forEach() loop using break in JavaScript? 
You: No, you cannot use break (or continue) inside a forEach() loop.
•	forEach() is a higher order function that takes a callback and executes it for each array element.
•	The callback is not a traditional loop structure, so break and continue don’t work inside it.
•	If you try, you’ll get a SyntaxError.
[1, 2, 3].forEach(num =>
 { if (num === 2) {
 break; //  SyntaxError: Illegal break statement } console.log(num); } );

Interviewer: Can a switch case check for ranges in JavaScript? 
You: No, a switch case cannot directly check for ranges. It only matches exact values.
•	switch compares the given expression against case labels using strict equality (===).
•	That means you can only check for specific values, not ranges like x > 10 && x < 20.
•	If you want ranges, you must use if...else statements or add logic inside each case.
let num = 15;
switch (num) {
  case (num > 10 && num < 20): // ❌ This won’t work
    console.log("Between 10 and 20");
    break;  }

Q: What is ES6?
A: ES6 (ECMAScript6) is the 6th version of JavaScript that introduced modern features like let and const, arrow functions, classes, modules, promises, and template literals — making JavaScript easier to write, more powerful, and more organized.

Q: What is Map in JS? 
A: A collection of key-value pairs with any type of keys. 

Q: What is Set in JS?
A: A collection of unique values. 

Q: How to loop through a Map? 
A: for (let [key, value] of map)

Q: What is prompt()?
A: A built in js method that display dialog box asking the user for input. It pauses the code execution untill the user enter a value or cancels it. It return the string value entered by the user or null if canceled.
Exmaple: let name = prompt("Enter your name");
         console.log(name);

Q: What is confirm()?
A: A built in js method that display a dialog box with the cancel and ok button. It is used to ask the user for a yes/no decision. Return true if user click on ok and false if user click on the cancel button.
Example:  let result = confirm("Do you want to continue the process");
          if(result){console.log("User want to proceede furthur");}
          else{console.log("User dont want to continue");}

Q: What is a module?
A: A module in JS is a reusable file that contains functions, variables, or classes. Instead of writing everything in one big script, modules let you split code into smaller, organized pieces and share them across files.

Q: How to export in a module?
A: You can export code in two ways:
1.	Default Export → only one per file
Example: export default function(a, b){ return a + b;}
Mention the above code in math.js file
2.	Named Export → multiple exports per file
Example: export function add(a, b){ a +b; }
Mention the above code in math1.js file

Q: How to import from a module?
A: Default Import – 
     Example: import add from “./math.js”;
     Named Import – 
     Example: import {add as addFun} from “./math1.js”; 

Q: What is scope in JavaScript? 
A: Scope defines the visibility of variables.


## DOM Related Question ##

Q: What is DOM?
A: DOM(Document Object Model) It is a programming interface for web documents. The DOM represent the HTML page as a tree structure where each element is a node. JavaScript can use the DOM to read, modify, add or delete elements dynamically.

Q: What is querySelector()?
A:  querySelector() is a DOM method in JavaScript that returns the first element within the document that matches      a given CSS selector. If no matching element is found, it returns null.

Q: What is querySelectorAll()?
A:  querySelectorAll() is a DOM method in JavaScript that returns all elements in the document that match a given CSS selector.
•	Unlike querySelector(), which returns only the first match, querySelectorAll() returns all matches.

Q: How to change an attribute? 
A: Attributes in the DOM are name–value pairs inside HTML tags that provide extra information about elements.
element.setAttribute("attr", "value");
You can use getAttribute() to read the value of an attribute from an element.
You can use removeAttribute() to delete an attribute from an element.

Q: How to remove an element?
A: Use the element.remove() method to delete an element from the DOM.

Q: How to replace an element?
A: Use parent.replaceChild(newNode, oldNode) to replace an existing child element with a new one.

Q: What is classList?
A: classList is a property of DOM elements that provides methods to add = element.classList.add(), 
Remove = element.classList.remove(), 
Toggle = element.classList.toggle(), 
check CSS classes = element.classList.contains().

Q: What is the event object?
A: The event object is automatically passed to event handler functions in JavaScript. It contains information about the triggered event, such as the type of event, the target element, mouse coordinates, key pressed, etc.

Q: What is event.target?
A: event.target refers to the element that actually triggered the event.

Q: What is event.currentTarget?
A: event.currentTarget refers to the element the event listener is attached to (the one currently handling the event).

Q: What is once option in event listener? Explain that with the help of example.
A: When you attach an event listener using .addEventListener(), you can pass an options object.
•	One of those options is once: true.
•	Meaning: The event listener will run only once — after it executes the first time, it is automatically removed.
•	This is useful when you want an action to happen a single time (e.g., onboarding popup, one time animation         trigger, or logging a unique event).
  Example => let button = document.querySelector("#btn");
  button.addEventListener("click", function() {
  console.log("Button clicked!"); }, { once: true });

Q: What’s the difference between the input and change events in JavaScript?
A: The input and change events are both used to detect user interactions with form elements, but they behave differently:
•	input event: Fires immediately whenever the value of an input changes — for example, on every keystroke in a text box.
•	change event: Fires only after the element loses focus (blur) and the value has been modified. For dropdowns or checkboxes, it fires as soon as the selection or state changes.

Q: Can events be triggered manually?
A: Yes. In JavaScript, events can be triggered manually using methods like element.click() or by creating and dispatching custom events with dispatchEvent(). 

   Example 1: Trigger a Built‑in Event
   <button id="btn">Click Me</button>
   <script>
     let button = document.querySelector("#btn");
     // Attach listener
     button.addEventListener("click", () => { console.log("Button clicked!"); });
     // Trigger event manually
     button.click(); // Logs "Button clicked!"
   </script>

   Example 2: Trigger a Custom Event
   let div = document.querySelector("#myDiv");

   // Attach listener
   div.addEventListener("customEvent", () => { console.log("Custom event triggered!"); });

   // Create and dispatch custom event
   let event = new Event("customEvent");
   div.dispatchEvent(event); // Logs "Custom event triggered!"

Q:  What is BOM?
A:  BOM(Browser Object Model) is a part of Javascript that lets you interact with the browser window.
    It gives you access the things like: 
    window → the browser window
    location → the current URL
    history → the browser’s back/forward history
    navigator → browser info (like user agent)
    screen → screen size and resolution

Q: How to reload a page? 
A: location.reload() 

Q: How to redirect to another URL? 
A: location.href = "https://example.com"

Q: How to go back one page? 
A: history.back() 

Q: How to go forward one page? 
A: history.forward()
    
Q: What is console.table()? 
A: Logs data in tabular format. 

Q: What is console.warn()? 
A: Logs a warning message. 

Q: What is console.time() and console.timeEnd()? 
A: Measures execution time of code. 

Q: How to open a new browser window? 
A: Using window.open("url")

## Question Related to the OOP's ##

Q: What is class?
A: A JS class is blueprint for creating the objects. It encapsulates the data and method together. Class are built on the top of prototype, but they use a more familiar object-oriented syntax. They support inheritance, encapsulation and reusability.
Example: class ClassName{}

Q: Can constructors be overloaded in JS?
A: No, JS does not support the constructor overloading. Only one constructor per class.

Q: What is encapsulation in OOP? 
A: Bundling data and methods into a single unit (class). 

Q: What is abstraction in OOP? 
A: Hiding complex details and showing only essential 
features.

Q: What are private class fields?
A: Private class fields in JavaScript are properties of a class that are declared with a # prefix. They are accessible only inside the class and cannot be read or modified directly from outside. This enforces encapsulation and protects internal state.
Example: class BankAccount {
  #balance = 0; // private field

  deposit(amount) { this.#balance += amount; }

  getBalance() { return this.#balance; }
}

const account = new BankAccount();
account.deposit(100);
console.log(account.getBalance()); //  100
console.log(account.#balance);     //  Error: private field not accessible

Q: What is a mixin? 
A: A mixin is a reusable object that contain methods or features. We can share those methods across multiple objects and classes. Instead of using the inheritance which can bring in the unwanted properties. We can use the mixin to copy only the behaviour we need.
Example: 
let mixin = { greet(){console.log(`Hello ${this.name}`);} }

class Human{
    constructor(name){ this.name = name; }
}
Object.assign(Human.prototype, mixin);
let h = new Human("Rahul");
h.greet();

Q: Can you define a method outside the class?
A: Yes. In JavaScript, you can define a method outside the class and then attach it to the class’s prototype. This way, all instances of the class can use it, even though it wasn’t written inside the class body.
Exmaple: function greet(){return  `Hello, my name is ${this.name}`;}
class Person{
  constructor(name){this.name = name;}
}
Person.prototype.greet = greet;
let p1 = new Person("bob");
console.log(p1.greet());

Q: What are getters and setters?
A: Getter (get) → A special method in a class/object that lets you access a property’s value. Called without paranthesis (like a property.)
Setter (set) → A special method that lets you update or modify a property’s value safely. Called automatically when you use assignment syntax.
Example:
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    // getter function
    get Age(){ return this.age; } 
    // setter function
    set Age(newAge){
        if(newAge > 0){ this.age = newAge; }
        else{ console.log("Invalid age"); }
    }
}
const p = new Person("Varsha", 20);
console.log(p.Age);
p.Age = 21;
console.log(p.Age);

## Function Related Question ##

Interviewer: What is an anonymous function in JavaScript?
You: An anonymous function is simply a function without a name. Instead of declaring it with a name, we define it directly where it’s needed.
•	It’s often used as a callback (passed into another function).
•	It helps when you don’t need to reuse the function elsewhere.
setTimeout(function() { console.log("run after 1 sec"); }, 1000);

Interviewer: What is a callback function in JavaScript? 
You: A callback function is a function that is passed as an argument to another function, and it gets executed later, usually after some task is finished.
•	It’s often used for asynchronous operations like waiting for data, timers, or events.
function welcome () {console.log (`welcome, again`);}
function greet(name, callback) {
    console.log(`hello ${name}`); callback(); }
greet("varsha", welcome);

Interviewer: Can arrow functions be used as constructors in JavaScript?
 You: No, arrow functions cannot be used as constructors.
•	Constructors in JavaScript are functions that can be called with the new keyword to create object instances.
•	Arrow functions do not have their own this binding and do not have a prototype property.
•	Because of this, they cannot be used with new. Attempting to do so throws an error.
Example = const Person = (name) => { this.name = name;};
const p = new Person("Varsha"); // TypeError: Person is not a constructor

Interviewer: What is a higher order function in JavaScript? 
You: A higher order function (HOF) is a function that either:
1.	Takes another function as an argument, or
2.	Returns a function as its result.
This makes functions in JavaScript first class citizens — they can be passed around just like variables.
•	Useful for callbacks, event handling, array methods, and function composition.
•	Makes code more reusable and expressive.
A higher order function is the one that receives or returns functions.
 A callback is the function that gets passed into a higher order function.

Q: Are function expressions hoisted?
A: No, only declarations are hoisted.

Interview: What is the argument object?
You: The arguments object in JavaScript
•	It’s something you get inside normal functions (not arrow functions).
•	It holds all the values you passed when you called the function.
•	It looks like an array, but it’s not a real array. You can use arguments[0], arguments[1], and arguments.length.
Example = function showArgs(a, b) {
console.log(arguments[0]); // first value 
console.log(arguments [1]); // second value console.log(arguments.length); // how many values passed } showArgs(10, 20);

Q: What is the use of rest parameters?
A: To accept unlimited arguments as an array.

Q: Why use IIFE?
A: To create private scopes and avoid polluting global scope.

Q: Can IIFE return values? 
A: Yes: let result = (() => 5 + 2)();

Q: What is memoization? 
A: Caching function results to improve performance. 

Q: What is function currying? 
A: Currying means breaking a function that takes multiple arguments into a series of functions that each take one argument at a time.
Example = function multiply(a) {
  return function(b) {
    return a * b; }; }
const double = multiply(2); 
console.log(double(5)); // 10

Q: What are pure functions? 
A: Functions with no side effects and consistent output for the same input. They are predictable and easier to test.
console.log() is a side effect because it changes something outside the function (it prints to the console).
function add(a, b) {  return a + b; }
console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 (always same result)

Q: What is an impure function? 
A: A function that modifies external variables or has side effects.
let count = 0;
function increase() {  count++; // changes external state
  return count; }
console.log(increase()); // 1
console.log(increase()); // 2

Q: Can you redefine a function? 
A: Yes, last definition overrides the earlier ones.
Example = let saySomething = function() {
console.log("First version"); }
saySomething(); // "First version"
// Redefine by assigning a new function
saySomething = function() {console.log("Second version"); };
saySomething(); // "Second version"

Q: Can you use arrow functions inside objects? 
A: Yes, but they don’t have their own this.

Q: Can arrow functions be methods?
A: Not recommended, due to lack of this.

Q: What is lexical scope?
A: Variables are accessible based on where they are written in the code, not how functions are called. Lexical scope is static: decided at the time you write the code. This is the foundation of closures in JavaScript (functions remembering variables from their outer scope).

Q: What is the difference between static and dynamic scoping?
A:  Static (Lexical) Scoping
•	Variable scope is decided at compile time (when code is written).
•	Inner functions can access variables from their outer functions because of their position in the code.
•	JavaScript uses static scoping.
Dynamic Scoping
•	Variable scope is decided at runtime (when the function is called).
•	The interpreter looks at the call stack to find variables.
•	Languages like Lisp (older versions) or Perl (with certain settings) can use dynamic scoping.
•	JavaScript does not use dynamic scoping.

Q: Can you await multiple promises? 
A: Yes, use Promise.all() with await.

Q: Can generator functions be asynchronous? 
A: Yes, use async function*.

Q: What is a closure? 
A: A function that retains access to its outer scope even after the outer function has returned. Closure can be created with the arrow function. If closure are not managed properly they cause the memory leaks.
Example = function outer () {let count = 0;
    return function () {count++;    console.log(count);}}
    let a = outer ();        a ();

Q: What is the use of closures?
A: To create private variables or encapsulation.

Q: What is the difference between the function chaining and the method chaining?
A: Function Chaining
Explanation:
•	In function chaining, each function call returns something that can be called again.
•	This could be another function (like in currying) or this (the same object).
•	It allows you to keep calling functions one after another without breaking the chain.
 
Method Chaining
Explanation:
•	In method chaining, you work with an object.
•	Each method returns the object itself (this), so you can immediately call another method on it.
•	This is common in libraries like jQuery and Promises.

class Calculator {
  constructor() {this.value = 0;}
  add(n) {   this.value += n;
    return this;   // return object for chaining
  }
  multiply(n) {  this.value *= n;  return this; }
}
const result = new Calculator().add(5).multiply(2)value;
console.log(result); 

Q: Can you use new Function () constructor? 
A: Yes, but it’s not recommended due to security and performance issues.

Q: Can functions be used with classes? 
A: Yes, as methods(working on the objects) or static functions(functions tied to the class itself).

Q: What is a tail call? 
A: A function call that happens as the last action in a function.

Q: Does JavaScript support tail call optimization? 
A: Some engines do, but not universally supported.

Q: Can you delete a function?
A:  In JavaScript, functions declared normally (with function) cannot be deleted because they are not configurable properties.
•	But if a function is assigned to an object property or assign to the variable, you can delete it by (or reassign it to null).
let obj = {
  greet: function() { console.log("Hello!"); }
};
delete obj.greet; // deletes the property
console.log(obj.greet); // undefined

Q: Can you clone a function? 
A: Not directly, but you can copy its reference.
function greet () {console.log("Hello");}
const copy = greet; // copy points to the same function
copy();  greet(); 

Q: Can functions have properties?
A: Yes, functions can have properties because they are objects in JavaScript.
function greet(){ console.log("hello"); }
greet.lang = "Eng";
console.log(greet.lang);

Q: What is the arity of a function?
A:  Arity of a Function
•	The arity of a function is the number of arguments (parameters) that the function expects.
•	In JavaScript, you can check a function’s arity using the (.length) property.

Example = function add(a,b){ console.log(a+b); }
console.log(add.length);

Q: What is a named function expression? 
A: A function expression with a name: 
const fn = function named() {};

Q: Can arrow function return objects directly?
A: yes, Arrow function can return object directly, but you must wrap the object in parantheses. Note-> without the parantheses, JavaScript interprests {} as a function 
   body, not the object literal.
   Exmaple: const greet = () => {name : "bob"};
            console.log(greet()); //undefined
       //correct way to return the object
       const greet = () => {name : "bob"};
       console.log(greet());

Q: Do arrow functions have their own super?
A: No, Arrow functions do not have their own super (just like they don’t have their own this, arguments, or new.target). Instead, they lexically inherit super from their 
   enclosing scope.
   Example: 
   class Parent{
    greet(){console.log("Hello parent")}
   }
   class Child extends Parent{
     constructor(){
         super(); // call the parent class method;
         this.sayHi = () => {
             super.greet(); //again call parent class method
             console.log("Hi from the child");
         }
      }
   }
  const c = new Child();
  c.sayHi(); //this thing work without an error because the constructor has super.

Q: Can arrow functions be recursive?
A: Yes, arrow functions can be recursive, but since they are anonymous by default, recursion requires either:
 i) Assigning them to a variable, or ii)Using a Named Function Expression.
Exmaple: 
const fact = (num) => {
    if(num<=1) {return 1;}
    return num * fact(num-1);
}
console.log(fact(5)); //120

Q: What is the Arrow function return rules?
A: With parentheses () → implicit return, The expression inside is returned automatically, no need for the return keyword.
   Example: const square = (x) => (x*x);
            console.log(square(5)); //25

   With curly braces {} → explicit return required, Curly braces create a block body so you must use return to send back     a value.
   Example: const square = (x) => {return x * x;}
            console.log(square(5)) //25

   Special case: returning objects, Wrap the object in parentheses (), otherwise {} is treated as a block body.
   Example: const obj = () => ({name : "bob";})
            console.log(obj());

Q: Do they have a prototype?
A: No, the prototype in js is a special property of function that enables inheritance when those functions are used as a constructor. Arrow function do not have their own "prototype" because they are not constructor and cannot be invoked with the new.

Q: Can arrow functions be used in event handlers?
A: Yes, arrow function can be used in event handlers. However "this" inside the arrow function does not refer to the element that triggered the event. Instead the arrow function inherit "this" lexically from their surrounding scope. 
Example: <button class="btn">Click</buton>
let btn = document.querySelector(".btn");
btn.addEventListener("click", function(){
    console.log("Normall function");
    console.log(this); //<button class="btn">Click</buton>
})
btn.addEventListener("click", () => {
    console.log("Arrow function");
    console.log(this); //window object
})

 Q: Do arrow functions support method shorthand?
 A: No, Arrow functions do not support method shorthand syntax in object or classes, arrow function must be assigned as a  property not the shorthand. 
 Method shorthand: is a special syntax that is used for defining the methods inside objects/classes without the function keyword.
 Example:
 //Normall function 
 const obj = {
 greet(){ console.log("hello") } //method shorthand
 }
 // Arrow function 
 const obj = {
 greet : () => { console.log("Hrllo"); } // arrow function assigned as a property
 }
 
 Q: What is a rest parameter?
 A: The rest parameter(...) in Js allows a function to accept an indefinite numbers of arguments in the form of array. if we are using the normall parameter and rest parameter than the rest paramter must be the last parameter. They replace the older arguments object with a cleaner, moder syntax. they collect the arguments in the form of an array.
Example: 
function fun(a, b, ...rest){
  console.log(a) //1
  console.log(b) //2
  console.log(rest) //[3, 4, 5]
}
fun(1,2,3,4,5);

Q: What is the difference between arguments and rest parameters?
A: arguments object
An array‑like object available inside all regular functions.
Contains all arguments passed to the function, regardless of how many parameters are declared.
Not available in arrow functions.
Does not support array methods directly (needs conversion to a real array).

Rest parameters (...)
A modern ES6 feature that collects remaining arguments into a real array.
Declared explicitly in the function signature (function f(...args)).
Works in both regular and arrow functions.
Supports array methods directly (map, filter, reduce, etc.).

Q: What is function composition? 
A: Function composition in JavaScript means combining multiple small functions to build a bigger function, where the output of one function becomes the input of the next.
Example: // without the composition
function square(num){ return num * num;}
function add(num){ return num + num;}

const result = square(add(5));
console.log(result);

Exmaple: // With Composition
function compose(f, g){
    return function(num){
        return f(g(num));
    }
}
function square(num){ return num * num;}
function add(num){ return num + num;}
const result = compose(square, add);
console.log(result(5));

Q: What is function Constructor? 
A: A function constructor in JavaScript is a way to dynamically create new function. Unlike normall function decleration or expression, the function constructor take string as a argument and always creates the function that executes in the global scope.
Exmaple: const fun = new Function("a", "b", "return a + b");
console.log(fun(2,1));

Why We Don’t Commonly Use the Function Constructor: 

1.Global Scope Only: 
Functions created with new Function() don’t close over local variables.
They always run in the global scope, which breaks encapsulation and makes code harder to reason about.

2.Security Risks:
Since the function body is passed as a string, it’s similar to eval().
If the string comes from user input, it can lead to code injection attacks.

3.Performance Issues:
The JavaScript engine has to parse the string at runtime to create the function.
This is slower and less optimized compared to normal function declarations or expressions.

4.Readability & Maintainability:
Writing function bodies as strings makes code harder to read, debug, and maintain.
IDEs and linters can’t easily catch errors inside string‑based code.

## Array Related Question ##

Q: Expalin the array method unshift, shift, push and pop?
A: push(): Adds one or more elements to the end of an array.
   Returns: The new length of the array.

   pop(): Remove the last element from an array.
   Returns: The removed elements.

   ushift(): Add one or more elements to the beginning of an Array.
   Returns: The new length of the array.

   shift(): Removes the first element from an array.
   Returns: the removed elements.

Q: What does arr.includes(value) do? 
A: Returns true if the array contains the value. 

Q: What is indexOf() used for? 
A: Returns the first index of a value, or -1 if not found. 

Q: What is lastIndexOf()? 
A: Returns the last index of a value. 

Q: How to join array elements into a string? 
A: arr.join(", ") 

Q: What does arr.toString() do? 
A: Converts the array to a comma-separated string. 

Q: How to sort an array? 
A: Using the array arr.sort() method. Changes reflected in the orignal array. By default It sorts alphabetically unless a compare function is used. for sorting numberic we have to use => arr.sort((a, b) => a - b); 

Q: What does splice() do? 
A: Adds/removes items at a specific index. 

Q: What does slice() do? 
A: Returns a shallow copy of a portion of an array. 

Q: What is the difference between slice() and splice()? 
A: slice() doesn't modify the original array; splice() does.

Q: Can forEach() break the loop?
A: No, The forEach() method in JavaScript cannot be broken or stopped early using break, continue, or return. Once started, forEach() will always iterate through the entire array.

Q: What is find()? 
A: Returns the first element that matches a condition. 
Example: const numbers = [10, 20, 30, 40];
const result = numbers.find(num => num > 25);
console.log(result); // 30

Q: What is findIndex()? 
A: Returns the index of the first matching element. 
const numbers = [10, 20, 30, 40];
const index = numbers.findIndex(num => num > 25);
console.log(index); // 2

Q: What is every()? 
A: Returns true if all elements match a condition. 

Q: What is some()? 
A: Returns true if at least one element matches a condition. 

Q: What is Array.of()? 
A: Creates an array from given arguments. 
Exmaple: const arr2 = Array.of(1, 2, 3); console.log(arr2); // [1, 2, 3]

Q: What is fill()? 
A: Fills all or part of the array with a static value. Syntax: fill(value, start, end)
Example: const arr = [1, 2, 3, 4];
arr.fill(0, 1, 3); 
console.log(arr); // [1, 0, 0, 4]

Q: What is copyWithin()? 
A: Copies part of the array to another location in the same array. in the same array, overwriting existing values. Syntax: copyWithin(target, start, end)
Example: const arr = [1, 2, 3, 4, 5];
let a = arr.copyWithin(0, 3); 
console.log(a); //[4, 5, 3, 4, 5]

Q: What is a sparse array? 
A: Some indices are missing values, so the array has gaps.

Q: Can you skip values during destructuring? 
A: Yes: let [,,c] = [1, 2, 3];

Q: How to create an array with N elements?
A: Using Array() constructor
Example: let arr = Array(5);
console.log(arr); //[<5 empty items>]
let arr1 = Array(5).fill(0);
console.log(arr1); //[0, 0, 0, 0, 0]

Q: What is the use of Array.prototype? 
A: By adding the method to (Array.prototype) we can make those methods available to all arrays in your program.
Example: Array.prototype.last = function() {
  return this[this.length - 1]; };

const nums = [10, 20, 30];
console.log(nums.last()); // 30

Q: What is Array.prototype.every.call()?
A: Array.prototype.every is the built‑in method that checks if all elements of an array satisfy a condition.
.call() is a way to invoke a function with a specific "this value".
So, Array.prototype.every.call() lets you use the every method on array‑like objects (objects that aren’t true arrays, like arguments or NodeList).

Example:
function checkAllEven() {
  // 'arguments' is array-like, not a real array
  return Array.prototype.every.call(arguments, num => num % 2 === 0);
}

console.log(checkAllEven(2, 4, 6)); // true
console.log(checkAllEven(2, 3, 6)); // false

Q: What is an array-like object?
A: An object with Indexed properties. They have a length property that indicates the number of elements. They not inherit from Array.prototype so built in array methods aren't avaliable. ex arguments objects inside functions.
Example: 
function demo(a, b, c){
    console.log(arguments[0]); //1
    console.log(arguments.length); //3
    console.log(arguments.push("4")); //Error arguments is not real array so we can't use array methods with it.
}
demo("1", "2", "3");

Q: How to convert arguments to array?
A: 1. using Array.from()
   Example: let args = Array.from(arguments);
   2. Using spread operator [...]
   Exmaple: let args = [...arguments];

Q: What’s the output of [1,2] + [3,4]?
A: "1,23,4" because arrays are converted to strings, then concatenated.  
   In JavaScript, the + operator is not array concatenation.For arrays, it first converts them to strings using .toString().
[1,2].toString() → "1,2"
[3,4].toString() → "3,4"

Q: What is the output of [,,,]? 
A: A sparse array with 3 empty slots. 

Q: Can an array have undefined values? 
A: Yes. 

Q: What happens if you delete an element using delete 
arr[1]? 
A: Leaves a hole (sparse array), doesn’t reduce length. 

Q: Best way to remove an element by index? 
A: arr.splice(index, 1)

Q: How to fill array with sequential numbers? 
A: let arr = Array.from({length: 5}, (_, i) => i+1);
console.log(arr);

Q: What does arr.at(-1) do?
A: The .at() method returns the element at a given index. Unlike the traditional arr[i] .at() supports negative indices. So arr.at(-1) returns the last element of the array.

Q: What is the spread operator used for in arrays?
A: Spread operator (...) expands arrays into individual elements —> perfect for copying, merging, passing arguments, or converting array‑like objects.

Q: Can you use map() on an empty array?
A: You can use map() on an empty array, but the result is still empty. On sparse arrays, holes are skipped.
Example: 
const arr = [1, , 3]; // hole at index 1
const result = arr.map(x => 10);
console.log(result); // [10, , 10]

Q: Can you assign properties to an array like arr.name = "x"?
A: Yes, arrays can have custom properties because they’re objects, However, these properties are not part of the array elements and won’t affect its length or iteration over numeric indices.
Exmaple: 
let arr = [1,2,3];
arr.name = "x";
console.log(arr); // [ 1, 2, 3, name: 'x' ]
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]); //1,2,3
}
console.log(arr.length); //3
// for in loop 
for(let key in arr){
    console.log(key); //0,1,2,name
}
// for of loop
for(let value of arr){
    console.log(value); //1,2,3
}

Q: Is array.length always equal to number of elements? 
A: No, it can include empty slots. 
Example: let arr = [1,2,,3];
console.log(arr.length);

Q: What is the time complexity of push()? 
A: O(1) 

Q: What is the time complexity of splice()? 
A: O(n) in worst case.

## Object Related Question ##

Q: How do you check if a property exists?
A: let obj = {name : "varsha", age : 20}
   console.log("name" in obj);

Q: What is Object.keys(obj)? 
A: Returns an array of keys. 

Q: What is Object.values(obj)? 
A: Returns an array of values. 

Q: What is Object.entries(obj)? 
A: Returns an array of key-value pairs.

Q: What is Object.fromEntries()? 
A: Converts key-value pair arrays into an object.

Q: Can object keys be numbers? 
A: Yes, but they are stored as strings.

Q: What is this inside an object method? 
A: Refers to the object itself.

Q: What does Object.assign() do? 
A: Copies properties from one or more objects to a target object.
Syntax: Object.assign(target, ...sources)
Example:
let obj = { name: "Varsha", age: 25 };
let obj1 = Object.assign({}, obj);
obj1.name = "Singh";
console.log(obj);  // { name: "Varsha", age: 25 }
console.log(obj1); // { name: "Singh", age: 25 }

Q: What is Object.freeze()? 
A: Makes an object immutable. You can not add, remove and update the property in the obj.

Q: What is Object.seal()? 
A: Prevents adding/removing properties but allows editing existing ones.

Q: What is a constructor function? 
A: A constructor function is a special type of function in js. That is used to create multiple similar objects with shared structure. It is called with the "new" keyword, they create a new object bind 'this' to that object, and return it automatically. Without the 'new' the function behave like a normall function. They are the foundation of object-oriented patterns in js.
Example: 
function User(name){
    this.name = name;
}
let u = new User("bob");
u.age = 20; //add property seperately
console.log(u); //User { name: 'bob', age: 20 }

Q: What does instanceof check? 
A: instanceof checks whether an object was created by a particular constructor.
Exmaple console.log(u instanceof User); //true

Q: What is hasOwnProperty()? 
A: Checks if a property exists directly on the object (not inherited). 
Exmaple: console.log(u.hasOwnProperty("age")); //true
console.log(u.hasOwnProperty("toString")); //false (inherited fromObject prototype)

Q: What is Object.create()? 
Ans: It creates a new object and sets its prototype to the object you pass in. This means the new object inherits properties and methods from that prototype. It is often used for creating objects that share behaviour without using the constructor function.
Exmaple: 
let personProto = {
    greet : function(){ console.log("it is a Prototype method"); }
}
let user = Object.create(personProto);
user.name = "bob";
console.log(user.name);
user.greet();

Q: Can you create objects with no prototype? 
A: Yes: Object.create(null)

Q: What is the prototype of an object? 
A: The prototype is another object from which the current object inherits properties and methods. In javaScript, every object has a hidden link to its prototype, forming the prototype chain.

Q: What is __proto__? 
A: It is an internal property that directly references an object's prototype. It shows the link to the prototype object.

Q: How do you get all property names of an object? 
A: Use Object.getOwnPropertyNames(obj) it returns an array of all property names that belongs directly to the object. It does not include properties from the prototype chain.
-> For Symbol properties use Object.getOwnPropertySymbols(obj);

Q: What is a computed property name? 
A: A property key that is dynamically determined at runtime. Instead of hardcoding the property name, you can use an expression inside square brackets [] to compute the key.  
let key = "name"; 
let obj = { [key]: "John" }; 

Q: What is object spread syntax? 
A: {...obj} – copies properties from one object into another. 

Q: What is a property descriptor? 
A: It is an object that describes attributes of a property. It defines how the property behaves.
Every property in JavaScript has a descriptor with attributes:
1. value       → the actual value of the property
2. writable    → whether the value can be changed
3. enumerable  → whether the property shows up in loops (like for...in)
4. configurable→ whether the property can be deleted or redefined

Important Method of Property descriptor are:

1. "Object.defineProperty" = lets you define or modify a property on an object with a property descriptor. 

Exmaple:  let obj = {}; 
Object.defineProperty(obj, 'key', { 
value: 100, 
writable: false, // cannot be reassigned 
enumerable: true, // shows up in loops 
configurable: true // can be deleted or redefined }); 
console.log(obj.key); // 100


2. "Object.defineProperties" = It is a method in js that let you define multiple properties at once on an object. Each property can have its own descriptor. It is similar to Object.defineProperty but used for the batch defination.

Example: let user = {}; 
Object.defineProperties(user, { 
name: 
{ value: "Varsha", 
writable: true, 
enumerable: true, 
configurable: true 
}, 
age: 
{ value: 25, 
writable: false, // read-only 
enumerable: true, 
configurable: true } 
}); 


3. "Object.getOwnPropertyDescriptor" = It returns the property descriptor object for a specific property of a given object.
Example: 
let user = {name : "bob"};
let descriptor = Object.getOwnPropertyDescriptor(user, "name");
console.log(descriptor);
output = {value : "bob", writable : true, enumerable : true, configurable : true}

Q: What is a getter in JavaScript?
A: A getter is a special method that retrieves (gets) the value of a property.
  - Defined using the 'get' keyword inside an object or class.
  - Allows you to access a property like a normal value, but behind the scenes it runs a function.
 
 Example:
  let user = {
    firstName: "bob",
    lastName: "Donald",
    get fullName() {
      return this.firstName + " " + this.lastName;
    }
  };
  console.log(user.fullName); // "bob Donald"

 Q: What is a setter in JavaScript?
 A: A setter is a special method that assigns (sets) the value of a property.
 - Defined using the 'set' keyword inside an object or class.
 - Allows you to update a property by calling it like an assignment.
 
Example:
let user = {
    firstName: "bob",
    lastName: "Donald",
    set fullName(name) {
      [this.firstName, this.lastName] = name.split(" ");
    }
  };
  user.fullName = "Bob McDonald";
  console.log(user.firstName); // "Bob"
  console.log(user.lastName);  // "McDonald" 

Q: What is toString() method of an object?
A: The toString() method returns a string representation of an object.
 - Every object in JavaScript inherits a toString() method from Object.prototype.
 - By default, it returns "[object Object]" for plain objects.
Example: let user = { name : "bob"};
console.log(user.toString()); //"[object Object]"

Q: Can you override toString()? 
A: Yes, You can define a custom toString() method inside your object or class to control its behaviour. 
Example: let obj = {
    toString : function(){ console.log("Heloo"); }
}
obj.toString();

Q: What is valueOf() in objects?
A: When it was used with the Primitive wrappers(Number, String etc): valueOf() returns the underlying primitive value.
Example: new Number(42).valueOf(); // 42           new String("hello").valueOf(); // "hello"

When it was used with the plain object it return the object itself not a primitive.
Example: let obj = {a : 1};  console.log(obj.valueOf()); //{a : 1}

 Q: What happens if you stringify an object with circular reference?
 A: A Circular refernce happens when an object refers to itself directly and indirectly.
 Exmaple: let obj = {};
 obj.self = obj;

JSON.stringify() -> tries to convert an object into JSON string. But if the object has a circular refernce, it gets stuck in an infinite loop because it keeps trying to expand the same object again and again. and in result it throws an TypeError.

Q: How to get JSON from an object? 
A: Use JSON.stringify(obj) 

Q: How to parse JSON into an object? 
A: Use JSON.parse(jsonStr)

Q: What is the purpose of a factory function?
A: A factory function is any function that creates and returns objects without using the 'new' keyword. It is usefull for the object creation patterns and avoid the complexities of constructor.
Example: function createPerson(name, age){
    return {
        name,
        age,
        greet(){ return `Hello, my name is ${this.name}`; }
    };
};
let p = createPerson("bob", 20);
console.log(p.greet());

Q: What is an object initializer? 
A: An object initializer (also called object literal) is an expression using curly braces {} to directly create objects with properties and values. 
Exmaple: let obj = {a : 1}; console.log(obj); //{a:1}

Q: What does Object.is(a, b) do? 
A: Object.is() checks if two values are the same. It is similar to === but handles special cases more accurately: 
1. NaN is considered equal to NaN  
2. +0 and -0 are considered different
Example: console.log(Object.is(NaN, NaN)); // true

Q: What is the result of JSON.stringify({a: undefined})? 
A: '{}', JSON.stringify() only serializes values that are valid in JSON (string, number, boolean, null, object, array). Properties with values (undefined, functions, or symbols) are skipped. That's why {a: undefined} becomes '{}'. 

Q: What is dictionary in JavaScript?
A: Js doesn't have built in dictionary type, but plain objects and (or Map) are often used as dictionaries for key-value storage.

Q: What is optional chaining (?.)?
A: Optional chaining allow safe access to nested properties. If a property doesn't exist, it returns undefined instead of throwing an error.
Example: let user = {};
console.log(user?.profile?.name); //undefined

Q: What does ?? (nullish coalescing) do?
A: The ?? operator return the right-hand value if the left-hand value is null or undefined. 
Example: console.log(null ?? 0); //0

Q: What is the main drawback of for..in loop?
A: It iterates over all the properties including the inherited ones. This can lead to the unexpected results if the prototype has extra properties.

Q: How to exclude inherited properties while looping?
A: Use Object.hasOwn() or Object.prototype.hasOwnProperty() to filter only the object's own properties.

Q: What does Object.hasOwn() do? 
A: Checks if an object has a property directly (not inherited). Safer than obj.hasOwnProperty() because it works even if the method is overridden. 
Example: let obj3 = { x: 10 };   console.log(Object.hasOwn(obj3, "x")); // true

Q: Can you spread objects inside arrays? 
A: Yes. Use Object.values() or Object.entries() with spread syntax. 
Example: let obj4 = { a: 1, b: 2 };  console.log([...Object.values(obj4)]); // [1, 2]

Q: Can you nest arrays inside objects? 
A: Yes. Arrays are valid values for object properties. 
Example: let obj5 = { items: [1, 2, 3] };   console.log(obj5.items[0]); // 1

