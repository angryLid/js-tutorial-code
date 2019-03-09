// https://javascript.info/bind

// Losing “this” 丢失this的解决方式 

// 解决方案 1 包装

let user = {
    firstName: "John",
    sayHi() {
        alert(`Hello, ${this.firstName}!`);
    }
};

setTimeout(function () {
    user.sayHi(); // Hello, John!

}, 1000);
//The same, but shorter:
setTimeout(() => user.sayHi(), 1000); // Hello, John!

// 漏洞 
let user = {
    firstName: "John",
    sayHi() {
        alert(`Hello, ${this.firstName}!`);
    }
};

setTimeout(() => user.sayHi(), 1000);

// ...within 1 second
user = { sayHi() { alert("Another user in setTimeout!"); } };

//解法2 绑定

let user = {
    firstName: "John"
};

function func() {
    alert(this.firstName);
}

let funcUser = func.bind(user);
funcUser(); // John
