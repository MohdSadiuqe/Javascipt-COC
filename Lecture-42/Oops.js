const users={
    userName:"saad",
    logincount:8,
    signIn:true,
    getuserdetail:function(){
        console.log("you got user details");
        console.log(`username:${this.userName}`);
        console.log(this);
    }
};
// console.log(users.userName);
// console.log(users.getuserdetail());

function userstwo(userName,logincount,signIn){
    this.userName=userName;
    this.logincount=logincount;
    this.signIn=signIn;
}

const user1=new userstwo("saad",2,true);
console.log(user1);