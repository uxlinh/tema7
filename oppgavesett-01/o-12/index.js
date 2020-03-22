const fornavn = prompt("Skriv inn fornavnet ditt");
const etternavn = prompt("Skriv inn etternavnet ditt");
const stilling = prompt("Skriv inn din jobbstilling");
const bilde = prompt("Skriv inn en bilde-URL av deg");

document.write(`

<article>
    <h1> ${fornavn} ${etternavn} </h1>
    <p> 
    <b>Stilling: </b>
    ${stilling}
    </p>
    
    <img src="${bilde}" style="width: 300px">
</article>

`) 

