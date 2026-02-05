const user={
    username:"saad",
    price:999,
    WelcomeMessage:function(){
        console.log(`${this.username}, welcome to my page`);
        console.log(this);
    }
}
// user.WelcomeMessage()
// user.username="hamza";
// user.WelcomeMessage()
// console.log(this);

// function chai(){
//     const username="saad"
//     console.log(this.username);
// }
// chai();

const chai=function(){
    const username="saad"
    console.log(this.username);
}
chai();

// Implicit return
const add=(a,b)=>{
    return a+b;
};
console.log(add(2,2));

// Emplicit return
// const addtwo=(a,b)=>(a+b);

console.log(addtwo(1,2));