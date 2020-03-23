const listeRetter = document.querySelector("#listeRetter");

let inpRett = document.querySelector("#inpRett");

function fastRett() {
listeRetter.innerHTML = `<li>Fiskeboller</li>`;
}
inpRett.addEventListener("click", fastRett);

function favorittRett() {
   listeRetter.innerHTML += `<li>${inpRett.value}</li>`;
}
inpRett.addEventListener("change", favorittRett);

