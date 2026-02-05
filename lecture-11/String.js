let name="saad";
let repocount=50;
let temp=name+repocount+"value"
console.log(temp);
console.log(typeof temp);

console.log(`My name is ${name} and my repocount is ${repocount}`);

const gamename=("volvorent");
console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toLocaleLowerCase());
console.log(gamename.toLocaleUpperCase());
console.log(gamename.charAt(2));
let newString=gamename.substring(0,5);
console.log(newString);
let anotherString=gamename.slice(-6,5);
console.log(anotherString);

const newone="     saad       "
console.log(newone);
console.log(newone.trim());