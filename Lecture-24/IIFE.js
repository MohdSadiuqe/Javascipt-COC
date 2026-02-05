// Immediately Invoked Function Expressions

(function chai(name){
    console.log(`DB is connnected ${name}`);
})("saad");
// chai();

((name)=>{
    console.log(`chai ${name}`);
})("aur code")