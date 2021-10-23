// 1) SUM OF AN ARRAY NUMBERS
const array = [1, 2, 3, 4, 5,];    
    const sum = array.reduce(function(a, b){
        return a + b;
    }, 0);   
    console.log(sum);

// 2) 3 ARRAYS
const threeObjects = [
    {
        name: "Ilia",
        age: 27,
        adress: "Tbilisi"
    },
    {
        name: "Sandro",
        age: 16,
        adress: "Batumi"
    },
    {
        name: "Giorgi",
        age: 24,
        adress: "Rustavi"
    }
]

// 3) 3 STRING

console.log(`My name is`,threeObjects[0].name);
console.log(`My age is`,threeObjects[0].age)
console.log(`My adress is`,threeObjects[0].adress)

// 4) IF/ELSE

let adult = threeObjects[0].age;

if (adult > 19){
    console.log(`i am an adult`);
}
else {
    console.log(`i am a teenager`);
}
