class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }
    encryptPassword(){
        return `${this.username}`;
    }
}
const user1=new User("saad","saad123@gmail.com",1234);
console.log(user1);
console.log(user1.encryptPassword());

function User2(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}
User2.prototype.encryptPassword2=function(){
    return `${User2.password}`;
}
const user2=new User2("saad","hamza",1234567)
console.log(user2);