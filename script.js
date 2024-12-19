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

SET variabel ordbok = [FOUR, FOUL, FOOL, FOOT, FORT, FORE, FIRE, FIVE]; // Innehåller ALLA ord i det engelska språket
SET variabel startOrd till "FOUR";
SET variabel slutOrd till "FIVE";
SET variabel gissningar = 0
SET variabel inmatning = 0

FUNKTION isOneLetterApart(wordOne, wordTwo)

    SET variabel diffCount = 0;

    LOOP för varje position i wordOne
        IF bokstaven i wordOne inte är samma som bokstaven i wordTwo
            diffcount++

        return true;

        ELSE return false

        END IF ELSE

    END LOOP

END FUNCTION

FUNCTION finnsIOrdbok(ord, ordbok)

    IF nyttOrd finns i ordbok
        PRINT "Bra jobbat ditt ord finns i ordboken!"
    ELSe
        PRINT "Ditt ord finns inte i ordboken"
        return false

    END IF ELSE

END FUNCTION

LOOP startordet inte är detsamma som slutordet
    PRINT startordet är 'startOrd'
    INPUT användaren skriver in ett ord som placeras i inmatning
    gissningar ++

    IF finnsIOrdbok(inmatning, ordbok) är sant och isOneLetterApart(startord, inmatning) är 1
        SET startordet = inmatning
        PRINT "Korrekt!"

        ELSE
        Skriv ut "Ogiltig inmatning, försök igen!"
        
        END IF ELSE

PRINT "Grattis, du har nått slutordet!"

END LOOP

*/