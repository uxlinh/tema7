const bilde = prompt("URL til bilde");
const bredde = prompt("Skriv inn bredden på bildet");
const tittel = prompt("Skriv inn tittel på bildet");

document.write(`
<img 
    src="${bilde}" 
    style="width:${bredde}px;"
    alt="${tittel}"
>
`) 

