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
