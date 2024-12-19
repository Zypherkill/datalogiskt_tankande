// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*

SET total = 0;
SET vänner = 0;
SET  summaPerVänn = 0;
SET dricks = 0;

FUNCTION kalkylera
CALCULATE dricks = dricks * total;
CALCULATE summaPerVänn = summa + dricks;
END FUNCTION

INPUT den totala summan och placera i variabel total;
INPUT antal vänner och placera i variabel vänner;
INPUT dricks och placera i variabel dricks;

CALL FUNCTION kalkylera

PRINT (Varje person ska betala ‘summaPerVänn’ kr);


*/

// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
// Startkoden är 100% frivillig och kan tas bort eller skrivas om
/*

play();

FUNCTION play()
    SET variabel ordbok = [FOUR, FOUL, FOOL, FOOT, FORT, FORE, FIRE, FIVE]; // Innehåller ALLA ord i det engelska språket
    SET variabel startOrd till "FOUR";
    SET variabel slutordOrd till "FIVE";
    SET variabel nyttOrd = 0
END FUNCTION

WHILE startordet inte är detsamma som slutordet
    PRINT startordet är 'startOrd'
    INPUT användaren skriver in ett ord som placeras i nyttOrd

    IF isOneLetterApart(startord, nyttOrd) är 1 och finnsIOrdbok(nyttOrd, ordbok) är sant
        SET startordet = nyttOrd
    ELSE
        Skriv ut "Ogiltigt ord, försök igen!"
    END IF ELSE

PRINT "Grattis, du har nått slutordet!"

END LOOP

FUNKTION isOneLetterApart(wordOne, wordTwo)
    SET variabel diffCount till 0;

    FOR varje position i ord1
        IF bokstaven i wordOne inte är samma som bokstaven i wordTwo
            diffcount++
        return diffCount === 1; // returnerar sant om endast en bokstav ändrats, annars falskt
    END LOOP

END FUNCTION

FUNCTIOn finnsIOrdbok(nyttOrd, ordbok)
    IF nyttOrd finns i ordbok
        Returnera sant
    ELSe
        PRINT "Ditt ord finns inte i ordboken"
        Returnera falskt

    END IF ELSE
END FUNCTION
*/