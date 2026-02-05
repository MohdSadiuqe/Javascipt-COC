const marvel_heros=["thor","ironMan","spiderman"];
const dc_heros=["siperman","batman","flash"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

const heros=marvel_heros.concat(dc_heros);
console.log(heros);

const allheros=[...marvel_heros,...dc_heros];
console.log(allheros);

let score1=100;
let score2=100;
let score3=100;

console.log(Array.of(score1,score2,score3));