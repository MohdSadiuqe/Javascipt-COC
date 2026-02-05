// For of

// ["", "", ""];
// [{}, {}, {}];

let arr=[1,2,3,4,5];

for (const it of arr) {
    console.log(it)
}

const greeting="hello world";
for (const iterator of greeting) {
    console.log(iterator)    
}
const map=new Map();
map.set("in","india");
map.set("pak","pakistan");
map.set("fr","france");
console.log(map);

for(const it of map){
    console.log(it[1]);  
}

const myobj={
    "game1":"nfs",
    "game2":"gta"
}
for(const it of myobj){
    console.log(it);
}