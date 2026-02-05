const tinder_user=new Object();
tinder_user.id=123
tinder_user.name="saad"
// console.log(tinder_user);

const regular_user={
    email:"saad@gmail.com",
    full_name:{
        user_name:{
            first_name:"Mohd",
            last_name:"Saad"
        }
    }
}
// console.log(regular_user.full_name.user_name.first_name);

const obj1={1:"12",2:"22"}


const obj2={3:"32",4:"44"}

// const obj3=Object.assign(obj1,obj2);
const obj3={...obj1,...obj2};
// console.log(obj3);


const user=[
    {
    name:"saad",
    age:"22"
    },
    {
    name:"hamza",
    age:"22"
    },
]
// console.log(user);

console.log(Object.keys(tinder_user));
console.log(Object.values(tinder_user));

console.log(Object.entries(tinder_user));

 