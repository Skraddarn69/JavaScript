    //Returnerar en slumpad bokstav från a till z.
    function genRandLetter(){
        return randLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    //Returnerar en slumpad siffra från 0 till 9.
    function genRandNum(){
        return randNum = Math.floor(Math.random()*9)+0;
    }
    let regSkyltar = [];
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //Loopar igenom två for-loopar som i sin tur genererar tre slumpade bokstäver
    //och tre slumpade siffror med ett "-" emellan som utgör en regskylt.
    for(let i=0;i<1000;i++){
        let regSkylt = "";
        
        for(let j=0;j<3;j++){
            regSkylt += genRandLetter();
        }
        regSkylt += "-";
        for(let j=0;j<3;j++){
            regSkylt += genRandNum();
        }
        //Checkar om den genererade regskylten redan existerar som ett värde i arrayen "regSkyltar".
        //Om skylten inte existerar så pushas den in i arrayen och om den redan finns så backas for-loopen
        //ett steg så att en ny skylt genereras.
        if(regSkyltar.includes(regSkylt)){
            i--;
        } else {
            regSkyltar.push(regSkylt);
        }
    }
    //Skriver ut tre skyltar och ökar samtidigt värdet av variabeln "i" med 3 varje loopning
    //fram tills att "i" är värd 1000, vilket bryter loopen.
    for(let i=0;i<1000;i++){
        console.log(`${regSkyltar[i++]}   ${regSkyltar[i++]}   ${regSkyltar[i++]}   ${regSkyltar[i]}`);
    }