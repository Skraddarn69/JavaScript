//uppgift 1

console.log(4+4);
console.log(16-8);
console.log(2*4);
console.log(16/2);
console.log(2**3)
console.log(17%9);

//uppgift 2

let namn="Kenneth";
let langd=namn.length;
console.log(`Namnet ${namn} består av ${langd} bokstäver.`);

//uppgift 3

let arstid = "Sommar";
if (arstid=="Höst"){
    console.log("Potatis");
}else{
    console.log("Ingen Potatis");
}

//uppgift 4

let frukt = 4;
if (frukt>0){
    console.log("Det finns frukt kvar");
}else{
    console.log("Ingen frukt kvar.");
}

//uppgift 5

let Aland = {namn:"Ål-land", nationalsport:"Kast med liten ål", sprak:"Ål-ländska", nationalrätt:"Ålbullar"};
console.log(Aland.nationalsport);

//uppgift 6

let varldshav=["Atlanten", "Stilla Havet", "Indiska Oceanen"];
console.log(varldshav);

//a

varldshav.push("Döda Havet");
console.log(varldshav);

//b

let hav1=varldshav.shift();//tar ut första havet ur varldshav och anger det som värde åt variabeln hav1
let hav4=varldshav.pop();//tar ut sista ordet och anger det som värde åt variabeln hav4
console.log(hav1);
console.log(hav4);

//c

varldshav.splice(1, 0, "Östersjön");
console.log(varldshav[1]);