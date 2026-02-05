// Premetive DataTypes

// 7 Types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

let Name="Saad";

let User_Number=1234;

let isValid=true;

let User_Name=null;

let Big_Number=12123319312093120310213902n

const Temprature=undefined;

let num1=Symbol(123);
let num2=Symbol(123);
console.log(num1==num2);

// Non-Premetive DataTypes

// 3 Types : Array, Object, Function

// Array

const heros=["ironman","batman","superman"];
for (let index=0;index< heros.length;index++) {
    console.log(heros[index]);
}

// Object

let myObj={
    name:"Saad",
    age:22,
    rollnumber:22
}
console.log(myObj.name);

function add(a,b){
    return a+b;
}
let a=10;
let b=20;

console.log(add(a,b));
 