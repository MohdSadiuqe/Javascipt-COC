class user{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`${this.username}`);
    }
}

class tearcher extends user{
    constructor(username,email,password){
        super(username);
        this.email=email;
        this.password=password;
    }
    addCourse(){
        console.log(`New couser add by ${this.username}`);
    }
}

const user1= new tearcher("saad","saad123",123);
user1.addCourse();
console.log(user1);
const user2= new user("hamze");
console.log(user2);
user2.logMe();