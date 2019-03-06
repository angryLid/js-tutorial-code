/* prerequisite : 
Objects for storing keyed collections.
Arrays for storing ordered collections.
But that’s not enough for real life. */

// Map is a collection of keyed data items, just like an Object. 
//But the main difference is that Map allows keys of any type.
// https://javascript.info/map-set-weakmap-weakset#map
// 映射 : 和对象类似 , 允许任意类型的键 

let map = new Map();//create the map 

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

map.get(key) // 获取  returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) // 存在检测 returns true if the key exists, false otherwise.
map.delete(key) // 删除 removes the value by the key.
map.clear() // 清空 clears the map
map.size //returns the current element count.

// 可以使用对象作为键 Map can also use objects as keys.
// for every user, let's store their visits count
let visitsCountMap = new Map();

// john is the key for the map
visitsCountMap.set(john, 123);

// 链式调用 Every map.set call returns the map itself, so we can “chain” the calls:
map.set('1', 'str1')
    .set(1, 'num1')
    .set(true, 'bool1');

// 从数组创建映射 array of [key, value] pairs
let map = new Map([
    ['1', 'str1'],
    [1, 'num1'],
    [true, 'bool1']
]);

// 从对象创建 映射 
let map = new Map(Object.entries({
    name: "John",
    age: 30
}));

// 迭代 
let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
    alert(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
    alert(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) { // the same as of recipeMap.entries()
    alert(entry); // cucumber,500 (and so on)
}

//集合 https://javascript.info/map-set-weakmap-weakset#set

new Set(iterable) // 从迭代创建集合 creates the set, optionally from an array of values (any iterable will do).
set.add(value) //添加 adds a value, returns the set itself.
set.delete(value)// 删除  removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) // 存在检测 returns true if the value exists in the set, otherwise false.
set.clear() //清空  removes everything from the set.
set.size //长度  is the elements count.

// 集合的迭代 
let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) alert(value);

// the same with forEach:
set.forEach((value, valueAgain, set) => {
    alert(value);
});

//WeakSet 是一种特殊的集合
// https://javascript.info/map-set-weakmap-weakset#weakmap-and-weakset
//它不会阻止 JavaScript 从内存中删除它的条目

let john = { name: "John" };
let array = [john];
john = null; // overwrite the reference
// 虽然John指向null , 但是它储存在数组中 , 不会被当做垃圾回收
// john is stored inside the array, so it won't be garbage-collected
// we can get it as array[0]


//与 Map 的第一个区别是 WeakMap 键必须是对象，而不是原始值:
let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, "ok"); // works fine (object key)

//如果我们使用一个对象作为其中的键，
//并且没有对该对象的其他引用，那么它将自动从内存(以及映射)中删除
let john = { name: "John" };
let weakMap = new WeakMap();
weakMap.set(john, "...");
john = null; // overwrite the reference

// john is removed from memory!


