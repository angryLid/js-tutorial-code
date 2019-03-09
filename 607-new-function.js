// https://javascript.info/new-function
let sum = new Function('a', 'b', 'return a + b');
alert( sum(1, 2) ); // 3

let sayHi = new Function('alert("Hello")');
sayHi(); // Hello

/* Functions created with new Function, have [[Environment]] referencing the global Lexical Environment, not the outer one. Hence, they cannot use outer variables. 
But that’s actually good, because it saves us from errors. 
Passing parameters explicitly is a much better method architecturally and causes no problems with minifiers.

 */