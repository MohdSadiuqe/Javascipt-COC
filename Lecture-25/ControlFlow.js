const isloggedin=true;
const temprature=51;
if(temprature<50){
    console.log('Code is Executed');
}
else{
    console.log('Code is not Executed');
}
// > , <, >=, <=, ==, !=, ===

const score=100;
if(score<200){
    const power="fly";
    console.log(`you can fly ${power}`);
}
// console.log(power);

const balances=600;
if(balances<500) console.log("balances"); 

if(balances<500){
    console.log("balances is less then 500"); 
}
else if(balances<750){
    console.log("balances is less then 750"); 
}
else if(balances<1000){
    console.log("balances is less then 1000"); 
}

const isloggedinn=true;
const isdebitcard=true;
if(isloggedinn&&isdebitcard||200==300){
    console.log("You can buy a course");
}

const useremail="saad 1234@gmail.com";
if(useremail){
    console.log("got a email");
}
else{
    console.log('Not get a email');
}

if(useremail.length===0){
    console.log('Array is empty');
}
const myobj={
}
if(Object.keys(myobj).length===0){
    console.log('object is empty');
}