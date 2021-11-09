/*
//uppgift 1

let slumpTal = Math.floor(Math.random()*100)+1;
if (slumpTal<18){
    console.log("You shall not pass!")
}else if (slumpTal>18){
    console.log("OK!")
}

//uppgift 2

let dice = Math.floor(Math.random()*6)+1;

switch(dice){
    case(1):
    console.log("blåbärspaj");
    break;
    case(2):
    console.log("äppelpaj");
    break;
    case(3):
    console.log("smultronpaj");
    break;
    case(4):
    console.log("lökpaj");
    break;
    case(5):
    console.log("kycklingpaj");
    break;
    case(6):
    console.log("rabarberpaj");
    break;
}

//uppgift 3

//a

for(let i=0;i<18;i++){
    console.log(i);
}

//b

for(let i=17;i>=0;i--){
    console.log(i);
}

//c

for(let i=134;i<=147;i++){
    console.log(i);
}

//d

for(let i=0;i<=20;i+=2){
    console.log(i);
}

//uppgift 4

let namnlista=["Kenneth", "Bengt", "Leffe", "Morgan", "Klemme"];
for(i=0;i<=4;i++){
    console.log(namnlista[i]);
}

//uppgift 5

let langtOrd="hyperneurokostiskadiafragmakontravibrationer";
let bokstaver=[];

for(let i=0;i<=langtOrd.length;i++){
    bokstaver.push(langtOrd.charAt(i));
}
for(let i=0;i<=44;i++){
    console.log(bokstaver[i]);
}
______________*/

//uppgift 6

let tio_Tal=[];

for(;tio_Tal.length!=10;){ 
    let i=Math.floor(Math.random()*100)+1;
    tio_Tal.push(i);
}

tio_Tal.sort(function(a, b){return a - b});

for(let i=0;i<=9;i++){
    console.log(tio_Tal[i]);
}