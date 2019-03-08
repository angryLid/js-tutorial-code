//https://javascript.info/json

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
};

let json = JSON.stringify(student);//JSON.stringify to convert objects into JSON.
//JSON.parse to convert JSON back into an object.
/* Strings use double quotes. No single quotes or backticks in JSON. So 'John' becomes "John".
Object property names are double-quoted also. That’s obligatory. So age:30 becomes "age":30. 
仅有单引号 
属性名必须使用双引号包括 
*/

/* 忽视js语言特性的部分 
Function properties (methods).
Symbolic properties.
Properties that store undefined. */

// 自动处理嵌套对象 , 但不支持循环引用 

//包含和转化 : 替代器 Excluding and transforming: replacer
//https://javascript.info/json#excluding-and-transforming-replacer

let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    participants: [{ name: "John" }, { name: "Alice" }],
    place: room // meetup references room
};

room.occupiedBy = meetup; // room references meetup

// 语法 let json = JSON.stringify(value[, replacer, space])
// 可以解决一些循环引用的问题 

alert(JSON.stringify(meetup, ['title', 'participants']));
// {"title":"Conference","participants":[{},{}]}

alert(JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']));
/*
{
  "title":"Conference",
  "participants":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/