//Array destructuring https://javascript.info/destructuring-assignment
// we have an array with the name and surname
let arr = ["Ilya", "Kantor"]

// destructuring assignment
let [firstName, surname] = arr;

alert(firstName); // Ilya
alert(surname);  // Kantor

let [firstName, surname] = "Ilya Kantor".split(' ');

// 上面的写法就是 : 
// let [firstName, surname] = arr;
let firstName = arr[0];
let surname = arr[1];

//丢弃元素的写法 
// first and second elements are not needed
let [, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert(title); // Consul

//右侧是可迭代
let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);

//左侧是变量名 
let user = {};
[user.name, user.surname] = "Ilya Kantor".split(' ');

alert(user.name); // Ilya

//遍历 
let user = {
    name: "John",
    age: 30
};

// loop over keys-and-values
for (let [key, value] of Object.entries(user)) {
    alert(`${key}:${value}`); // name:John, then age:30
}


// 用"三个点"接受其余元素 
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert(name1); // Julius
alert(name2); // Caesar

// Note that type of `rest` is Array.
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2

//默认值  
let [firstName, surname] = [];

alert(firstName); // undefined
alert(surname); // undefined

// 对象拆分 
let options = {
    title: "Menu",
    width: 100,
    height: 200
};

let { title, width, height } = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200