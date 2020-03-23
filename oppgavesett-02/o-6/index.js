// a
const boks = document.querySelector("#boks");

let inpXpos = document.querySelector("#inpXpos");
let inpYpos = document.querySelector("#inpYpos");

function posisjonX() {
   boks.style.left = inpXpos.value + "px";
}
function posisjonY() {
   boks.style.top = inpYpos.value + "px";
}

inpXpos.addEventListener("input", posisjonX);
inpYpos.addEventListener("input", posisjonY);



// b
let inpBredde = document.querySelector("#inpBredde");
let inpHoyde = document.querySelector("#inpHoyde");

function Bredden() {
   boks.style.width = inpBredde.value + "px";
}
function Hoyden() {
   boks.style.height = inpHoyde.value + "px";
}

inpBredde.addEventListener("input", Bredden);
inpHoyde.addEventListener("input", Hoyden);



// c
let inpAvrunding = document.querySelector("#inpAvrunding");

function avrundet() {
   boks.style.borderRadius= inpAvrunding.value + "px";
}

inpAvrunding.addEventListener("input", avrundet);