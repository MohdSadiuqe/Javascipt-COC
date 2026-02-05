let array=[1,2,3,4,5,"saad","hamza",true];

// Access index
// console.log(array[3]);

// Printing Array

// for(let index = 0;index<array.length;index++) {
//     console.log(array[index]);
// }

// Another Way to Declare the Array

let array2=new Array(1,2,3,4,5);

// console.log(array2[1]);

// Push
// console.log(array.push(0))

// pop
// console.log(array.pop(0))


// unshift

// console.log(array.unshift(9));

// console.log(array);

// Join

const newArray=array.join();
// console.log(array);
// console.log(typeof newArray);

// Slice Splice

console.log("A",array);

const arr1=array.slice(0,3);
console.log(arr1);

console.log("B",array);

const arr2=array.splice(0,3);
console.log(arr1);

console.log("C",array);