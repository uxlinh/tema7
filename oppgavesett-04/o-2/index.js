//a
const listVenner = document.querySelector("#listVenner");
const inpNavn = document.querySelector("#inpNavn");
const inpAlder = document.querySelector("#inpAlder");
const btn = document.querySelector("#btn");

let venner = [
    { navn: "Snorre", alder: 28  },
    { navn: "Lise", alder: 24  },
    { navn: "Børre", alder: 32  }
];
//b
function visVenner() {
    listVenner.innerHTML = "<div>Navn</div><div>Alder</div>";
    
    for(const venn of venner) {
        listVenner.innerHTML += `
        <div class="venntabell">${venn.navn}</div>
        <div class="venntabell">${venn.alder}</div>
        `
    }
}
function leggTilVenn() {
    const nyVenn = { navn: inpNavn.value, alder: inpAlder.value } 
    venner = [nyVenn, ...venner]
    visVenner();
}

btn.addEventListener("click", leggTilVenn);


