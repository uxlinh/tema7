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
    } else {
        feedback.style.color = "black";
    }

    inpBelop.value = "";
    inpBelop.focus = "";
}

function saldoLagtTil() {
    let saldoMer = Number(saldo) + Number(inpBelop.value)
    feedback.innerHTML = `Du har nå kroner ${saldoMer} på kontoen`;

    inpBelop.value = "";
    inpBelop.focus = "";
}

//Du må fylle inn begge passordene


btnInn.addEventListener("click", saldoLagtTil);
btnUt.addEventListener("click", saldoTrukket);