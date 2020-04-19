let inpPassord1 = document.querySelector('#inpPassord1');
let inpPassord2 = document.querySelector('#inpPassord2');



function registrerPassord() {
    if (inpPassord1.value === inpPassord2.value) {
        feedback.innerHTML = `Passordene er like`;
        feedback.style.color = "green";
    } else if (inpPassord1.value !== inpPassord2.value) {
        feedback.innerHTML = `Du må fylle inn begge passordene`;
        feedback.style.color = "#e68b03";
    } else {
        feedback.innerHTML = `Passordene er ikke like`;
        feedback.style.color = "red";
    }
}
//Du må fylle inn begge passordene




inpPassord1.addEventListener ("input", registrerPassord);
inpPassord2.addEventListener ("input", registrerPassord);