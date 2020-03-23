//Oppgavesett 2


//Oppgave 1
const fornavn = prompt("Hva er fornavnet ditt?");
const etternavn = prompt("Hva er etternavnet ditt?");

function dittNavn(fornavn, etternavn) {
    const sum = fornavn + " " + etternavn;
    return sum; //Her kan return sende tilbake svaret. Funksjonen er en funksjon med returverdi.
}

const summen = dittNavn(fornavn, etternavn);
document.write(summen);
console.log(summen);