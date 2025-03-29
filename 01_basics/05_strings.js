const name = "Mi-te-sh"
const repoCnt = 10


console.log(name + repoCnt)

console.log(`My name is ${name} & repocount is ${repoCnt} `)

const gameName = new String('Underwater')


console.log(gameName[0])
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLowerCase);
console.log(gameName.charAt(4));
console.log(gameName.indexOf("U"));


const newString = gameName.substring(0,3)
console.log(newString);

const anotherString = gameName.slice(-8,4)    // slice ke andar negative values use kar sakte hai
console.log(anotherString);

const newStringOne = "   mitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://github.com/Mitesh0Chaudhari44/js-chai"
console.log(url.replace('0','-'));

console.log(url.includes('shiv'));

console.log(name.split('-'));





