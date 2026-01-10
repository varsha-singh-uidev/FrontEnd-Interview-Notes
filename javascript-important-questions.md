##### Interview Questions ##### 

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
1.	Using isNaN(value) → This checks if the value is Not a Number.
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

## DOM Related Question ##

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
A: What is the once option in Event Listener?
•	When you attach an event listener using addEventListener(), you can pass an options object.
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
A: Yes. In JavaScript, events can be triggered manually using methods like element.click() or by creating and         dispatching custom events with dispatchEvent(). 

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


