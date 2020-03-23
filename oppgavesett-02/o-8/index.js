const teksten = document.querySelector("#teksten");

let inpType = document.querySelector("#inpType");


function tekstType() {
   teksten.style.fontFamily = inpType.value;
}


inpType.addEventListener("input", tekstType);

