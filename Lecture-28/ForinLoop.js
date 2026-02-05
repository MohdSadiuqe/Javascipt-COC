// ForIn Loop
const object={
    "game1":"nfs",
    "game2":"gta"
}

for (const key in object) {
    console.log(`the key is ${key} and the value is ${object[key]}`);
}

const language=["c++","java","ruby"];
for (const key in language) {
    console.log(language[key]);
}
