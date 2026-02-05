// ForEach

const coding=["java","python","c++","ruby"];

coding.forEach(function (item){
    // console.log(item);
})

// AeroFunction
coding.forEach((item)=>{
    // console.log(item);
})

coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
})

const mycoding=[
    {
        Language:"c++", 
        LanguageFileName:"cpp",
    },
    {
        Language:"python", 
        LanguageFileName:"py",
    }
]
mycoding.forEach((item)=>{
    // console.log(item.LanguageFileName);
})

// ForEach do not return value
const val=coding.forEach((item)=>{
    console.log(item);
})
console.log(val);