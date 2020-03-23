const btnFloyte = document.querySelector("#btnFloyte");
const btnHarpe = document.querySelector("#btnHarpe");
const btnPiano = document.querySelector("#btnPiano");

function spillLyd(evt) {
    const knapp = evt.target
    console.log(knapp)
    const lyd = knapp.dataset.lyd
    console.log(lyd)
    document.getElementById(lyd).play();
}
// I Javascript kan lyden spilles med funksjonen: harpe.play();

btnFloyte.onclick = spillLyd
btnHarpe.onclick = spillLyd
btnPiano.onclick = spillLyd