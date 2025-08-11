// Date

let myDate = new Date()

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());

//let myDate1 = new Date(2025,8,11,5,6)
let myDate1 = new Date("2025-08-12")
console.log(myDate1.toLocaleDateString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myDate1.getTime());

console.log(Math.floor(Date.now()));


// get a single month , date or day
console.log(myDate1);
console.log(myDate1.getMonth()+1);
console.log(myDate1.getDay());

// ` ${newDate.getDay()} and the time `

