function SetUsername(username){
    this.username=username;
}

function userone(username,email,password){
    SetUsername.call(this,username)
    // this.username=username;
    this.email=email;
    this.password=password;
}
const one=new userone("saad","saad1234",123);
console.log(one);