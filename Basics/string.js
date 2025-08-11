const name ="Vikas "
const repositoryCount = 5

console.log(name + repositoryCount + " Value");

console.log(`Hello my name is ${name} and my repo is ${repositoryCount}`);

const gameName = "android-app"

console.log(gameName[0])
console.log(gameName.__proto__);

console.log(gameName.length);
//console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('o'));

const newString = gameName.substring(0,3)
console.log(newString);

const anotherString = gameName.slice(-5,2)
console.log(anotherString);

const str = "  vikas  "
console.log(str);
console.log(str.trim());

const url = "https://localhost.com/vk.org"
console.log(url.replace('org','edu'));

console.log(url.includes('vk'));

const splitting  = "vikas-kumar-edu"
console.log(splitting.split('-'));




