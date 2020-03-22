const forrett = prompt("Hva vil du ha til forrett?");
const hovedrett = prompt("Hva vil du ha til hovedrett?");
const dessert = prompt("Hva vil du ha til dessert?");
document.write (`
<ul>
<h1>Meny</h1>
<li> Til forrett får du: ${forrett} </li>
<li> Til hovedrett får du: ${hovedrett} </li>
<li> Til dessert får du: ${dessert} </li>
</ul>
`);
