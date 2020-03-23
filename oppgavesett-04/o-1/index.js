
/* a */
let filmer = [" Batman Begins", " Spirited Away", " Parasite", " The Truman Show"];

/* b */
filmer = [" Mulan", ...filmer]; 

/* c */
filmer[3] = " Spartacus";
opabc.innerHTML = `${filmer}`;

/* d */
listFilmer.innerHTML = "";
for(const film of filmer) {
    listFilmer.innerHTML += `<li>${film}</li>`;
}

/* e */
const filmList = document.querySelector("#filmList");
const inpFilm = document.querySelector("#inpFilm");
const btn = document.querySelector("#btn");
let movies = [];

function visFilmer(){

    filmList.innerHTML = "";

    for(const mov of movies) {
        filmList.innerHTML += `<li>${mov}</li>`;
    }

    inpFilm.value = ""; 
    inpFilm.focus(); 
}

function leggTilFilm(){
    movies = [inpFilm.value, ...movies]; //Hvis vi omrokkerer på denne så legger nye varen seg til sist på lista, og omvendt først på lista. 
    visFilmer();
}

btn.onclick = leggTilFilm;