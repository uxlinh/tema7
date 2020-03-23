
/* a */
let filmer = ["Batman Begins ", "Spirited Away ", "Parasite ", "The Truman Show "];

/* b */
filmer = ["Mulan ", ...filmer]; 

/* c */
filmer[3] = "Spartacus "
document.write `
Deloppgave (a, b, c): ${filmer}`

/* d */
listFilmer.innerHTML = "Deloppgave d";
for(const film of filmer) {
    listFilmer.innerHTML += `<li>${film}</li>`;
}
