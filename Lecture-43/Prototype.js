function multiply(num){
    return num*5;
}
multiply.power=2;
console.log(multiply(4));
console.log(multiply.power);
console.log(multiply.prototype);

function user(username,score){
    this.username=username;
    this.score=score;
 }
user.prototype.increment=function(){
    this.score++;
}
 const user1=new user("saad",23);
 const user2=("hamza",123);

 user1.increment();
 console.log(user1.score);

const heros=["thor","spiderman"];
const herospower={
    thor:"hammer",
    spiderman:"sping",

    powers:function(){
        console.log("they have a superpower");
    }
}
Object.prototype.hitesh=function(){
    console.log("hi hitesh");
}
Array.prototype.hihitesh=function(){
    console.log("hitesh");
}
herospower.hitesh();
heros.hihitesh();

const userr={
    name:"hamze",
     
}

const teacher={
    makevideo:true
}
const teachersupert={
    makevideo:false
}
const TAsupert={
    makevideo:'js assignment',
    fulltime:true
}

// teacher.__proto__=user
Object.setPrototypeOf(teacher,teachersupert);