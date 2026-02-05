// For

for (let index=0;index<10;index++) {
    if(index==5){
        console.log('5 is the best number');
    }
    console.log(index); 
}

for(let i=0;i<10;i++){
    console.log(`outer loop ${i}`);
    for(let j=0;j<10;j++){
        console.log(`inner loop ${j} and outer loop ${i}`);
    }
}

const heros=["a","b","c"];
for (let index = 0; index < heros.length; index++) {
    const element = heros[index];
    console.log(element);
}