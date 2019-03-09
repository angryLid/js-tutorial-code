//https://javascript.info/function-object

// 函数有名字属性 
function sayHi() {
    alert("Hi");
}
alert(sayHi.name); // sayHi

let sayHi = function () {
    alert("Hi");
}
alert(sayHi.name); // sayHi (works!)

function f(sayHi = function () { }) {
    alert(sayHi.name); // sayHi (works!)
}
f();

//多数函数都有名字

//长度属性 
function f1(a) { }
function f2(a, b) { }
function many(a, b, ...more) { }

alert(f1.length); // 1
alert(f2.length); // 2
alert(many.length); // 2

//Here we can see that rest parameters are not counted.

//函数的属性 可以自定义 
//https://javascript.info/function-object#custom-properties

// 具名函数表达式 Named Function Expression

let sayHi = function func(who) {
    if (who) {
        alert(`Hello, ${who}`);
    } else {
        func("Guest"); // use func to re-call itself
    }
};

sayHi(); // Hello, Guest

// But this won't work:
func(); // Error, func is not defined (not visible outside of the function)
//允许函数在内部调用自己 
