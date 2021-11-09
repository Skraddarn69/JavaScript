//Lektion 1 JavaScript

//Skriver ut till konsolen
console.log("Hello World");

/*
Kommentar som går över flera rader
Här är det också kommentar
och här
*/

//En variabel declareras med let går också att använda var men då har det en annan scope
let namn="Nisse";
console.log(namn);
let a=4;
let b=5;
let c;
let d="2";
c=a+b;
console.log(c);
console.log(namn+b); //concat
console.log(a/d); //automatisk type conversion
console.log(b/namn);

//Datatyper
//String, Number(Integer, Double, Float), Boolean, object, (null, undefined)

let num=0;
console.log(typeof(num));


const pieIsh = 3.14;

//Type conversion Number() String()
let place=54;
console.log(place);
console.log(place+2);
console.log(String(place)+2);

