// a
const artikkel = document.querySelector("#artikkel");

const inpURL = document.querySelector("#inpURL");

const inpOverskrift = document.querySelector("#inpOverskrift");

const knapp = document.querySelector("#knapp");

function artikkelGenerert() {
   artikkel.innerHTML += `
      <img src="${inpURL.value}">
      <h3>${inpOverskrift.value}</h3>`
}

knapp.addEventListener("click", artikkelGenerert);

//BildeURL: https://www.skeidar.no/globalassets/9999/produkter/innredning/dekor/bilder-og-galleri/102089_000_0013.png?w=375&quality=75&format=jpg
// Tittel: Uglenes fantastiske overlevelses strategi
