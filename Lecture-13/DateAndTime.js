const dates=new Date();
console.log(dates);
console.log(dates.toDateString());
console.log(dates.toLocaleString());
console.log(dates.toJSON());

// const newDate=new Date(22,0,2026);
const newDate=new Date("1-12-2026");
console.log(newDate.toDateString());

const MyTimeStamp=Date.now();
console.log(MyTimeStamp);
console.log(newDate.getTime());

console.log(Math.floor(Date.now()/1000));

console.log(newDate);
console.log(newDate.getMonth()+1);



