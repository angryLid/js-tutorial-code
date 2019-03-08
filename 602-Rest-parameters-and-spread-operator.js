//https://javascript.info/rest-parameters-spread-operator

//Rest parameters ...

function showName(firstName, lastName, ...titles) {
    alert(firstName + ' ' + lastName); // Julius Caesar

    // the rest go into titles array
    // i.e. titles = ["Consul", "Imperator"]
    alert(titles[0]); // Consul
    alert(titles[1]); // Imperator
    alert(titles.length); // 2
}

showName("Julius", "Caesar", "Consul", "Imperator");

//The “arguments” variable

function showName() {
    alert(arguments.length);
    alert(arguments[0]);
    alert(arguments[1]);

    // it's iterable
    // for(let arg of arguments) alert(arg);
}

// shows: 2, Julius, Caesar
showName("Julius", "Caesar");

// shows: 1, Ilya, undefined (no second argument)
showName("Ilya");

//Spread operator
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

alert(Math.max(1, ...arr1, 2, ...arr2, 25)); // 25