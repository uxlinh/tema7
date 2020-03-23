// a
const teksten = document.querySelector("#teksten");


let inpStorrelse = document.querySelector("#inpStorrelse");

let inpType = document.querySelector("#inpType");

let inpTekstFarge = document.querySelector("#inpTekstFarge");

let inpBakgrunnsFarge = document.querySelector("#inpBakgrunnsFarge");


function tekstStorrelse() {
   teksten.style.fontSize = inpStorrelse.value + "px";
}
function tekstType() {
   teksten.style.fontFamily = inpType.value;
}
function tekstFarge() {
   teksten.style.color = inpTekstFarge.value;
}
function bakgrunnsfarge() {
   document.body.style.backgroundColor = inpBakgrunnsFarge.value;
}

inpStorrelse.addEventListener("input", tekstStorrelse);
inpType.addEventListener("input", tekstType);
inpTekstFarge.addEventListener("input", tekstFarge);
inpBakgrunnsFarge.addEventListener("input", bakgrunnsfarge);
