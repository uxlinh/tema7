const bakgrunnsfarge = prompt("Skriv inn bakgrunnsfarge til nettsiden");
const tittel = prompt("Skriv inn størrelse på tittelen: Oppgave 7");


document.write(`

<body style="background-color: ${bakgrunnsfarge};">
</body>

<h1 style="font-size: ${tittel}px;">Oppgave 7</h1>
    <p>Bruk et script-element til å lage et style-element. Be brukeren med prompt om en bakgrunnsfarge eller andre
    CSS-verdier, og sett dette inn i style-elementet. Hvis du bruker inspiser skal det se omtrent slik ut. Det er
    JavaScript-koden som lager style-elementet.</p>
`)