const pris = prompt("Skriv inn pris på en vare uten moms");

document.write(`

<div>
    <h3>Program som beregner pris på en vare:</h3>
    <ul>
        <li>Pris uten moms: ${pris} </li>
        <li>Moms: ${pris * 0.25} </li>
        <li>Pris med moms: ${pris * 1.25} </li>
    </ul>
</div>
    
`) 

