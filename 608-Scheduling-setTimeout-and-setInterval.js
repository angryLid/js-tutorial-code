//https://javascript.info/settimeout-setinterval

//setTimeout
function sayHi() {
    alert('Hello');
}
//For instance, this code calls sayHi() after one second:
setTimeout(sayHi, 1000);

function sayHi(phrase, who) {
    alert(phrase + ', ' + who);
}
setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John

setTimeout(() => alert('Hello'), 1000);

//Canceling with clearTimeout
//A call to setTimeout returns a “timer identifier” timerId that we can use to cancel the execution.

// In the code below, we schedule the function and then cancel it (changed our mind). As a result, nothing happens:

let timerId = setTimeout(() => alert("never happens"), 1000);
alert(timerId); // timer identifier

clearTimeout(timerId);
alert(timerId); // same identifier (doesn't become null after canceling)

//setInterval 
// repeat with the interval of 2 seconds
let timerId = setInterval(() => alert('tick'), 2000);

// after 5 seconds stop
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);

//Recursive setTimeout 
/* There are two ways of running something regularly.
One is setInterval. The other one is a recursive setTimeout, like this:
 */

/** instead of:
let timerId = setInterval(() => alert('tick'), 2000);
*/

let timerId = setTimeout(function tick() {
    alert('tick');
    timerId = setTimeout(tick, 2000); // (*)
}, 2000);

//The recursive setTimeout is a more flexible method than setInterval. 
let delay = 5000;

let timerId = setTimeout(function request() {
    //   ...send request...
    if (1) { //request failed due to server overload
        // increase the interval to the next run
        delay *= 2;
    }
    timerId = setTimeout(request, delay);
}, delay);

// Recursive setTimeout guarantees a delay between the executions, setInterval – does not.


setTimeout(() => alert("World"), 0);
alert("Hello");

/* The first line “puts the call into calendar after 0ms”. 
But the scheduler will only “check the calendar” after the current code is complete, so "Hello" is first, and "World" – after it. */

/* There’s a trick to split CPU-hungry tasks using setTimeout.
So we can split the long text into pieces. First 100 lines, then plan another 100 lines using setTimeout(...,0), and so on.
 */


let i = 0;

let start = Date.now();

function count() {

  // do a piece of the heavy job (*)
  do {
    i++;
  } while (i % 1e6 != 0);

  if (i == 1e9) {
    alert("Done in " + (Date.now() - start) + 'ms');
  } else {
    setTimeout(count, 0); // schedule the new call (**)
  }

}

count();
/* We do a part of the job (*):

First run: i=1...1000000.
Second run: i=1000001..2000000.
…and so on, the while checks if i is evenly divided by 1000000.
Then the next call is scheduled in (**) if we’re not done yet. */

//To let the browser do something else while the process is going on (paint the progress bar).
