//https://javascript.info/global-object

// window 对象
/* 除了作为全局对象, 它还提供浏览器窗体的功能
It provides the “browser window” functionality, besides playing the role of a global object.
We can use window to access properties and methods, specific to the browser window: */

/*全局的var变量会自动成为window的属性
 Top-level var variables and function declarations automatically become properties of window. */

/* 所有脚本共享定义域
Also, all scripts share the same global scope, so variables declared in one <script> become visible in another ones:
*/

/* this指向window
And, a minor thing, but still: the value of this in the global scope is window.
*/

// 修复方式 Using <script type="module"> fixes the design flaw of the language by separating top-level scope from window.

//对全局变量的使用 
// There should be as few global variables as possible, but if we need to make something globally visible, we may want to put it into window (or global in Node.js).


// explicitly assign it to `window`
window.currentUser = {
    name: "John",
    age: 30
};

// then, elsewhere, in another script
alert(window.currentUser.name); // John

// We can test the global object for support of modern language features.
//For instance, test if a build-in Promise object exists (it doesn’t in really old browsers):

if (!window.Promise) {
    alert("Your browser is really old!");
}

//We can create “polyfills”: add functions that are not supported by the environment (say, an old browser), but exist in the modern standard.
if (!window.Promise) {
    window.Promise = "..." // custom implementation of the modern language feature
}