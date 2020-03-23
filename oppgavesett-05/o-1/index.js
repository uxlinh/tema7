let inpPassord1 = document.querySelector('#inpPassord1');
let inpPassord2 = document.querySelector('#inpPassord2');



function registrerPassord() {
    if (inpPassord1.value === inpPassord2.value) {
        feedback.innerHTML = `Passordene er like`;
    } else if (inpPassord1.value !== inpPassord2.value) {
        feedback.innerHTML = `Du må fylle inn begge passordene`;
    } else {
        feedback.innerHTML = `Passordene er ikke like`;
    }
}
//Du må fylle inn begge passordene




inpPassord1.addEventListener ("input", registrerPassord);
inpPassord2.addEventListener ("input", registrerPassord);