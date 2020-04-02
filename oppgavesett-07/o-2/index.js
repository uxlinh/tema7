mapboxgl.accessToken = 'pk.eyJ1IjoidXhsaW5oIiwiYSI6ImNrOGZ0eWN2YzA4NWozaW9pMXRldXloZnMifQ.CZVP7vDSVxGDVdE2UTZdSw';

const flyKnapper = document.querySelector("#flyKnapper")

const map = new mapboxgl.Map({
container: 'kartet', //fordi id="kartet" i hmtl
style: 'mapbox://styles/mapbox/streets-v11',
zoom: 10,
center: [10.774653, 59.918145],
});

const venner = [
    {
        navn: "Jacqueline",
        tekst: "Hei",
        avatarUrl: './img/jacqueline.png',
        lng: 10.779949,
        lat: 59.914087
    },
    {
        navn: "Amanda",
        tekst: "Hei",
        avatarUrl: "./img/amanda.png",
        lng: 10.953983,
        lat: 59.924471
    },
    {
        navn: "Christina",
        tekst: "Hei",
        avatarUrl: './img/christina.png',
        lng: 10.199239,
        lat: 59.921052
    },
    {
        navn: "Linh",
        tekst: "Hei",
        avatarUrl: './img/linh.png',
        lng: 10.766111,
        lat: 59.921515
    },
]

const addMarker = (venner) => {

    const div = document.createElement("div")
    div.className = "vennMarker"
    const marker = new mapboxgl.Marker(div)
    const minPopup = new mapboxgl.Popup()
    div.style.backgroundImage = `url(${venner.avatarUrl})`
    
    minPopup.setHTML(`
    <img src="${venner.avatarUrl}" alt="bilde">
    <h3>${venner.navn}</h3>
    <p>${venner.tekst}</p>
    `)
    marker.setLngLat([venner.lng, venner.lat])
    marker.addTo(map) 
    marker.setPopup(minPopup)
}

const addMarkers = () => {
    for(const venn of venner) {
        addMarker(venn)
    }
}

map.on("load", addMarkers)





const flyTil = (evt) => {
    const knapp = evt.target
    const lng = knapp.dataset.lng 
    const lat = knapp.dataset.lat

    map.flyTo({
        center: [lng, lat],
        zoom: 14
    })
}

flyKnapper.onclick = flyTil