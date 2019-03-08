//https://javascript.info/date
//not finished yet 
// 创建时间对象 new Date()
let now = new Date();
alert( now ); // shows current date/time

// 0 means 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);
// now add 24 hours, get 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);

let date = new Date("2017-01-26");

new Date(year, month, date, hours, minutes, seconds, ms)

/*The year must have 4 digits: 2013 is okay, 98 is not.
The month count starts with 0 (Jan), up to 11 (Dec).
The date parameter is actually the day of month, if absent then 1 is assumed.
If hours/minutes/seconds/ms is absent, they are assumed to be equal 0.*/


// 获取时间的方法 
getFullYear()
// Get the year (4 digits)
getMonth()
// Get the month, from 0 to 11.
getDate()
// Get the day of month, from 1 to 31, the name of the method does look a little bit strange.
getHours(), getMinutes(), getSeconds(), getMilliseconds()
// Get the corresponding time components.

getDay()
// Get the day of week, from 0 (Sunday) to 6 (Saturday). 
// The first day is always Sunday, in some countries that’s not so, but can’t be changed.
// 以上这些都是获得本地时间 

getTime()
// Returns the timestamp for the date – a number of milliseconds passed from the January 1st of 1970 UTC+0.

getTimezoneOffset()
// Returns the difference between the local time zone and UTC, in minutes:

//设置时间 https://javascript.info/date#setting-date-components

/*
setFullYear(year [, month, date])
setMonth(month [, date])
setDate(date)
setHours(hour [, min, sec, ms])
setMinutes(min [, sec, ms])
setSeconds(sec [, ms])
setMilliseconds(ms)
setTime(milliseconds)  (sets the whole date by milliseconds since 01.01.1970 UTC)*/