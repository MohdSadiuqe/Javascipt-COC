const promiseone=new Promise(function(res,rej){
    setTimeout(function(){
        console.log('Async task one');
        res();
    },1000)
})
promiseone.then(function(){
    console.log("promise is resolved");
})

new Promise(function(res,rej){
    setTimeout(function(){
        console.log("Async task two");
        res();
    },1000)
}).then(function(){
    console.log("promise is resolved");
})

const promisethree=new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve({username:"chai",password:1234})
  },1000)
}).then((user)=>{
    console.log(user);
})

const promisefour=new Promise((res,rej)=>{
    setTimeout(()=>{
        let error=true;
        if(!error){
            res({username:"hamza",password:4321});
        }
        else{
            rej("something went rong");
        }
    },1000)
})
promisefour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log('the promise is either reject or resolve');
})

const promisefive=new Promise((res,rej)=>{
    setTimeout(()=>{
        let error=true;
        if(!error){
            res({username:"hamza",password:5678});
        }
        else{
            rej("something went rong")
        }
    },1000)
});
async function consumepromisefive(){
    try{
        const res=await promisefive
        console.log(res);
    }
    catch(error){
        console.log(error);
    }
}
consumepromisefive()

// async function getallusers(){
//     try{
//         const res=await fetch('https://jsonplaceholder.typicode.com/users');
//         // console.log(res);
//         const data=await res.json();
//         console.log(data);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// getallusers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>{
    return res.json();
}).then((data)=>{
    console.log(data);
    
}).
catch((error)=>{
    console.log(error);
})