// SingleToon Object

const obj=new Object()
console.log(obj);

// Object Laterals

const Mysymbol=Symbol("key1");
const mydetails={
    name:"saad",
    "Fullname":"mohd saad",
    [Mysymbol]:"keys1", 
    email:"saad@gmail.com",
    age:"22",
    location:"varanasi"
}
// console.log(mydetails.email);
// console.log(mydetails["name"]);
// console.log(mydetails["Fullname"]);
// console.log(typeof mydetails[Mysymbol]);

mydetails.email="mahdsaad@gmail.com";
// console.log(mydetails.email); 

mydetails.greeing=function(){
    console.log('Hello user');
}
mydetails.greeingtwo=function(){
    console.log(`Hello user , ${this.name}`);
}
// console.log(mydetails.greeing);

console.log(mydetails.greeing());
console.log(mydetails.greeingtwo());