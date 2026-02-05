function CalculateCart_Price(val1,val2,...num1){
    return num1;
}
console.log(CalculateCart_Price(1,2,3,4,5));

const user={
    username:"saad",
    price:10000
}

function handleObject(anyobj){
    console.log(`user name is ${anyobj.username} and price is ${anyobj.price}`);
}
handleObject(user)
handleObject({
    username:"hamza",
    price:"2000"
})

const array=[10,20,30,40];

function print_FirstIndex(calls){
    console.log(array[3]);
}
print_FirstIndex(array)
