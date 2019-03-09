// https://javascript.info/call-apply-decorators

/* 装饰器的优点
The cachingDecorator is reusable. We can apply it to another function.
The caching logic is separate, it did not increase the complexity of slow itself (if there were any).
We can combine multiple decorators if needed (other decorators will follow).
*/

// 对象方法的装饰器 
//https://javascript.info/call-apply-decorators#using-func-call-for-the-context

// Going multi-argument with “func.apply”

function say(time, phrase) {
    alert(`[${time}] ${this.name}: ${phrase}`);
}

let user = { name: "John" };

let messageData = ['10:00', 'Hello']; // become time and phrase

// user becomes this, messageData is passed as a list of arguments (time, phrase)
say.apply(user, messageData); // [10:00] John: Hello (this=user)

//The only syntax difference between call and apply is that call expects a list of arguments, while apply takes an array-like object with them.

let args = [1, 2, 3];

func.call(context, ...args); // pass an array as list with spread operator
func.apply(context, args);   // is same as using apply


