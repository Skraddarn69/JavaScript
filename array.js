//En array tillsätts värden med []

index=Math.floor(Math.random()*3)

let fruits=["apel","päron","banan"];

console.log(fruits[index]);
fruits[2]="kiwi";
console.log(fruits[2]);
console.log(fruits);
fruits.push("banan");
console.log(fruits);
//shift() och pop() tar ut första respektive sista medlemmen i arrayn
let eatFruit=fruits.shift();
console.log(eatFruit);
console.log(fruits);

//andra array metoder: reverse() sort() slice() concat()
