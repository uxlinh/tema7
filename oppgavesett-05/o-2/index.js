let inpBelop = document.querySelector('#inpBelop');
const btnUt = document.querySelector("#btnUt");
const btnInn = document.querySelector("#btnInn");
let saldo = 500;
feedback.innerHTML = `Du har nå kroner ${saldo} på kontoen`

function saldoTrukket() {
    let saldoRest = saldo - inpBelop.value
    feedback.innerHTML = `Du har nå kroner ${saldoRest} på kontoen`

    if (inpBelop.value > saldo) {
        feedback.innerHTML = `Du har ikke dekning på kontoen`
        feedback.style.color = "red";
    } else if(inpBelop.value < 0){
        feedback.innerHTML = `Beløpet er for lavt`
        feedback.style.color = "red";
    } else {
        feedback.style.color = "black";
    }

    inpBelop.value = "";
    inpBelop.focus = "";
}

function saldoLagtTil() {
    let saldoMer = Number(saldo) + Number(inpBelop.value)
    feedback.innerHTML = `Du har nå kroner ${saldoMer} på kontoen`;
    feedback.style.color = "green";

    inpBelop.value = "";
    inpBelop.focus = "";
}



btnInn.addEventListener("click", saldoLagtTil);
btnUt.addEventListener("click", saldoTrukket);