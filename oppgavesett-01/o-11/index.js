const pris = prompt("Skriv inn pris på en vare uten moms");

document.write(`

<h1>Pris på en vare:</h1>
<ul>
    <li>Pris uten moms: ${pris} </li>
    <li>Moms: ${pris * 0.25} </li>
    <li>Pris med moms: ${pris * 1.25} </li>
</ul>

`) 

