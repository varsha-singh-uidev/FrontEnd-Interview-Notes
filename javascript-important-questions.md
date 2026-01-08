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

