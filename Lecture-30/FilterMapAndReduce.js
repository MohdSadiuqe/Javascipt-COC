const num=[1,2,3,4,5,6,7,8,9];
const value=num.filter((num)=>{
    return num>4;
})
console.log(value);

const newarr=[];
num.forEach((num)=>{
    if(num>4){
        newarr.push(num);
    }
})
// console.log(newarr);

// Map

const num1=[1,2,3,4,5,6,7,8,9];
const ans=num1.map((num1)=>num1+10);
console.log(ans);

const newarr1=num1.map((num1)=>num1*10).map((num1)=>(num1+1)).filter((num1)=>num1>40)
console.log(newarr1);

// Reduce 
const arr=[1,2,3];
const add=arr.reduce(function(acc,currval){
    return acc+currval;
},0)

console.log(add);

const add1=arr.reduce((acc,currval)=>acc+currval)
console.log(add1);