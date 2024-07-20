// 1. Use the ternary operator for conditional assignment

/* 
    The ternary operator (? : ) is a shorthand way of writing an if-else statement that assigns a value to a variable based on a condition.
     Syntax for the JavaScript ternary operator:
*/
variable = condition ? value1 : value2;

//  2.
// Beginner
let age = 18;
let status;
if (age >= 18) {
    status = "adult";
} else {
    status = "minor";
}

// -----------------------------------------------------------

// Pro
let age = 18;
let status = age >= 18 ? "adult" : "minor";

// The ternary operator is more concise and elegant than the if-else statement, and it can also be nested for multiple conditions. However, be careful not to overuse it. It can make your code less readable and maintainable if it is too complex.

// JavaScript Ternary vs if-else Statement

// Pro tip: If more than one line statement is involved then use if-else for more clarity.

// 2. Use the spread operator to copy and merge arrays and objects
// The spread operator (…) is a handy feature introduced in ES6 that allows you to expand an iterable (such as an array or a string) into its elements, or to copy and merge objects.

// Here is an example of how to use the spread operator (…):
// Beginner
let person = { name: "John", age: 35 };
let address = { city: "New York", country: "USA" };
let personAddress = Object.assign({}, person, address);
// Output: {name: "John", age: 35, city: "New York", country: "USA"}

// -----------------------------------------------------------

// Pro
let person = { name: "John", age: 35 };
let address = { city: "New York", country: "USA" };
let personAddress = { ...person, ...address };
console.log(personAddress);
// Output: {name: "John", age: 35, city: "New York", country: "USA"}

// JavaScript Spread Operator

// The spread operator is more concise and expressive than the concat and Object.assign() methods, and it also creates a shallow copy of the original arrays or objects, which means that it does not modify them.

// 3. Use the rest parameter to collect arguments into an array
// The rest parameter (…) is another feature introduced in ES6 that allows you to collect the remaining arguments of a function into an array.

// Rest operator is useful when you want to write a function that can accept any number of arguments, or when you want to access the arguments object in an arrow function.

// Example of rest parameter:

// Beginner
function sum() {
    // Convert arguments object into an array
    let args = Array.prototype.slice.call(arguments);
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        result += args[i];
    }

    return result;
}

let total = sum(1, 2, 3, 4, 5);
console.log(total);
// Output: 15

// -----------------------------------------------------------

// Pro
function sum(...args) {
    // collect arguments into an array
    let result = 0;
    for (let num of args) {
        result += num;
    }

    return result;
}

let total = sum(1, 2, 3, 4, 5);
console.log(total);

// Output: 15
// The rest parameter is more elegant and intuitive than the arguments object, and it also works with arrow functions, which do not have access to the arguments object.

// 4. Use the destructuring assignment to extract values from arrays and objects
// The destructuring assignment is another feature introduced in ES6 that allows you to extract values from arrays and objects and assign them to variables in a single statement. This is useful when you want to access multiple properties of an object or elements of an array without having to write repetitive code.

// Here is an example of how to use object restructuring to read a subset of properties.

let person = {
    name: "John",
    age: 25,
    occupation: "Developer",
};

// Beginner
let name = person.name;
let age = person.age;
let occupation = person.occupation;

// -----------------------------------------------------------

// Pro
// Extract values from the object and assign them to variables with the same names
let { name, age, occupation } = person;
// The destructuring assignment is more concise and readable than the dot notation or the bracket notation, and it also allows you to specify default values, rename variables, or skip unwanted values.

// 5. Use the template literals to create dynamic strings
// The template literals or backtick ( )` are another feature introduced in ES6 that allows you to create dynamic strings that can include variables, expressions, or even multiline text.

// They are enclosed by backticks ( ) and use ${} syntax` to embed values. For example:

// Beginner
let username = "John";
let age = 20;
let message =
    "Hello, my name is " + username + " and I am " + age + " years old.";

// -----------------------------------------------------------

// Pro
let username = "John";
let age = 20;
let message = `Hello, my name is ${username} and I am ${age} years old.`;

// JavaScrConcatenation Methodsipt String

// The template literals are more expressive and convenient than the JavaScript string concatenation, and they also allow you to write multiline strings without having to use the escape character (\n).

// 6. Use the arrow functions to write concise and elegant functions
// The arrow functions are another feature introduced in ES6 that allows you to write concise and elegant functions with a shorter syntax.

// Arrow functions have the following advantages over regular functions:

// They do not require the function keyword, the return keyword, or the curly braces.
// They have an implicit return. It means that they return the value of the last expression without having to write the return keyword.
// They have a lexical this, which means that they inherit this value from their parent scope, instead of being determined by how they are called.
// Here is an example of an arrow function:

// Beginner
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(function (num) {
    return num * num;
});

// -----------------------------------------------------------

// Pro
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map((num) => num * num);

// The arrow functions are more concise and elegant than the regular functions, and they also avoid the common pitfalls of the this keyword.

// However, they are not suitable for every situation. Such as when you need to use the arguments object, bind a function to a specific context, or define a method on an object.

// 7. Use the default parameters to assign default values to function parameters
// The default parameters are another feature introduced in ES6 that allows you to assign default values to function parameters if they are not provided or undefined. This is useful when you want to write a function that can handle different scenarios without having to write multiple conditional statements.

// JavaScript default parameter example:

// Beginner
function greet(name, message) {
    if (name === undefined) {
        name = "Guest";
    }
    if (message === undefined) {
        message = "Welcome";
    }
    return message + ", " + name + "!";
}

// -----------------------------------------------------------

// Pro
function greet(name = "Guest", message = "Welcome") {
    return `${message}, ${name}!`;
}

// The default parameters are more concise and expressive than the if statements, and they also allow you to use any valid expression as a default value, such as a function call, an object literal, or an array literal.

// Use the logical operators to simplify conditional expressions
// The logical operators (&&, ||, and !) are not only useful for combining multiple conditions but also for performing some common tasks with less code.

// Here is an example of how to use the logical && operator:

// Beginner
let value = 10;
if (value > 5) {
    console.log("value is greater than 5");
}

// -----------------------------------------------------------

// Pro
let value = 10;
value > 5 && console.log("value is greater than 5");

// You can use the && operator to execute a function or an expression only if a condition is true, without having to write an ifstatement.

// 9. Use the bitwise operators to perform some arithmetic operations faster
// The bitwise operators (such as &, |, ^, ~, <<, >>, and >>>) are used to manipulate the individual bits of a number, which can be useful for some low-level operations, such as encryption, compression, or graphics. However, they can also be used to perform some arithmetic operations faster than the regular operators, such as:

// You can use the bitwise & operator to check if a number is even or odd, by checking the least significant bit. If it is 0, the number is even, otherwise it is odd.
// Beginner
let value = 100;
if (value % 2 === 0) {
    console.log("value is even number");
} else {
    console.log("value is odd number");
}

// -----------------------------------------------------------

// Pro
let value = 100;
if (value & 1) {
    console.log("value is odd number");
} else {
    console.log("value is even number");
}

// You can use the ^ operator to swap two numbers without using a temporary variable, by using the XOR operation.

// Note that these bitwise tricks may not work for very large numbers, as JavaScript uses 64-bit floating-point numbers, but only 32 bits for bitwise operations.

// 10. Use the JavaScript includes() method to check if an array contains a value
// The JavaScript includes() method is a feature introduced in ES7 that allows you to check if an array contains a value, and returns a boolean value. This is useful when you want to perform a simple membership test, without having to use the indexOf() method or a loop.

// How to use JavaScript includes() method:

// Beginner
let months = ["Jan", "Feb", "Mar", "Apr", "May"];
if (months.indexOf("Apr") !== -1) {
    console.log("The array contains Apr.");
}

// -----------------------------------------------------------

// Pro
let months = ["Jan", "Feb", "Mar", "Apr", "May"];
if (months.includes("Apr")) {
    console.log("The array contains Apr");
}

// JavaScript includes() method

// The JavaScript includes() method is more expressive and intuitive than the indexOf() method, and it also works with NaN values, unlike the JavaScript indexOf() method.

// 11. Use the Object.is() method to compare two values
// The Object.is() method is a feature introduced in ES6 that allows you to compare two values and returns a boolean value. It is similar to the === operator, but it has some differences that make it more reliable and consistent.

// For example:
// Beginner
console.log(0 === -0); // true
console.log(NaN === NaN); // false

// -----------------------------------------------------------

// Pro
// console.log(Object.is(0, -0));     // false
// console.log(Object.is(NaN, NaN));  // true
// The JavaScript Object.is() method is more accurate and predictable than the strict equality === operator, as it does not consider 0 and -0 to be equal, and it does consider NaN to be equal to itself.

// 12. Use the startsWith() and endsWith() methods to check the beginning and end of a string
// The JavaScript startsWith() and endsWith() methods are features introduced in ES6 that allow you to check if a string starts or ends with a given substring, and return a boolean value.

// This is useful when you want to perform a simple string matching, without having to use the slice method or a regular expression. For example:

// Beginner
let greet = "Hello world";
if (greet.slice(0, 5) === "Hello") {
    console.log("The string starts with Hello");
}
if (greet.slice(-5) === "world") {
    console.log("The string ends with world");
}

// -----------------------------------------------------------

// Pro
let greet = "Hello world";
if (greet.startsWith("Hello")) {
    console.log("The string starts with Hello");
}
if (greet.endsWith("world")) {
    console.log("The string ends with world");
}

// JavaScript startsWith() Method

// The startsWith() and endsWith() methods are more concise and readable than the JavaScript slice() methods, and they also accept a second argument, which is the position to start or end the search.

// 13. Use the optional chaining operator to access nested properties
// The optional chaining operator (?.) is a feature introduced in ES11 that allows you to access nested properties of an object without checking if they exist and returns undefined if any of them are null or undefined.

// This is useful to avoid errors and simplify your code when dealing with complex or dynamic objects. For example:
// // An object with nested properties

let person = {
    name: "Alice",
    age: 25,
    address: {
        city: "New York",
        country: "USA",
    },
};

// Beginner
// Access the city property using the dot notation and check for null or undefined values
let city;
if (person && person.address && person.address.city) {
    city = person.address.city;
}

console.log(city);
// Output: "New York"

// -----------------------------------------------------------

// Pro
// Access the city property using the optional chaining operator
let city = person?.address?.city;
// Output: "New York"
// The optional chaining operator is more concise and safe than the dot notation, as it avoids throwing errors if any of the intermediate properties is null or undefined. It also works with arrays and functions, using the syntax [?.] and (?.) respectively.

// 14. Use the nullish coalescing operator (??) to assign default values
// The nullish coalescing operator or double question mark (??) is a feature introduced in ES11 that allows you to assign a default value to a variable or a parameter if the given value is null or undefined and returns the given value otherwise.

// Nullish Coalescing Operator

// This is useful when you want to avoid assigning false values, such as 0, false, or an empty string, as default values.

// For example:

// Beginner
let name = "";
let message = name || "Guest"; // message is "Guest"

// -----------------------------------------------------------

// Pro
let name = "";
let message = name ?? "Guest"; // message is ""

let name2;
message = name2 ?? "Guest"; // message is "Guest"

// 15. Use the for-of loop to iterate over iterable
// The for-of loop is a feature introduced in ES6 that allows you to iterate over any iterable object, such as an array, a string, a set, a map, or a JavaScript generator, and execute a code block for each value.

// This is useful when you want to avoid the hassle of using indexes, keys, or properties to access the values.

// For example:
// An array of numbers
let numbers = [1, 2, 3, 4, 5];

// Beginner
// Iterate over the array using the for loop
for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    console.log(num);
}

// -----------------------------------------------------------

// Pro
// Iterate over the array using the for-of loop
for (let num of numbers) {
    console.log(num);
}
