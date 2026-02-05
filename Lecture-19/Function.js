function say_name(){
    console.log("s");
    console.log("a");
    console.log("a");
    console.log("d");
}
console.log(say_name());

// function add(a,b){
//     console.log(a+b);
// }
// console.log(add(2,3));


// function add(a,b){
//     if(typeof a==="number"&&typeof b ==="number"){
//         console.log(a+b)
//     }
//     else{
//         console.log("Not a number")
//     }
// }
// add(2,3)

function add(a,b){
    // let result=a+b;
    // return result
    return a+b;
}
const result=add(2,3);
// console.log(result);

function loggin_usermessage(user_name){
    if(user_name===undefined){
        console.log("Please enter the username");
        return
        
    }
    return `${user_name} is login`
}
const result2=loggin_usermessage("saad");
console.log(result2);

const result3=loggin_usermessage();
console.log(result3);
