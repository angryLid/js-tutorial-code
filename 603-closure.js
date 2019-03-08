//Closure https://javascript.info/closure

//A couple of questions 
//1. The function sayHi uses an external variable name. When the function runs, which value is it going to use?

let name = "John";

function sayHi() {
    alert("Hi, " + name);
}

name = "Pete";

sayHi(); // what will it show: "John" or "Pete"?

//So, the question is: does it pick up the latest changes?

/* The function makeWorker makes another function and returns it. 
 That new function can be called from somewhere else.
 Will it have access to the outer variables from its creation place, or the invocation place, or both?
 */
function makeWorker() {
    let name = "Pete";

    return function () {
        alert(name);
    };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work(); // what will it show? "Pete" (name where created) or "John" (name where called)?


// Lexical Environment
//https://javascript.info/closure#lexical-environment

//A function gets outer variables as they are now; it uses the most recent values.
//So the answer to the first question is Pete:

/* The global Lexical Environment has name: "John".
At the line (*) the global variable is changed, now it has name: "Pete".
When the function sayHi(), is executed and takes name from outside. 
Here that’s from the global Lexical Environment where it’s already "Pete". */

//Nested functions

//代码块