
let distance = document.querySelector('#distance')
let now = document.querySelector('#status')
const speed = document.querySelector('#speed')
const temp =document.querySelector('#temp')
const progress = document.querySelector('#progress')

const update = () => {
    fetch('https://api.jwst-hub.com/track')
    .then(response => response.json())
    .then(data => {
        let dist = data.distanceEarthKm
        const spd = data.speedKmS
        const tem = data.tempC.tempCoolSide1C
        const prog = data.percentageCompleted
        let stat = data.currentDeploymentStep
        live (dist, spd, tem, prog, stat)
        
    });
}

function live(d, s, t, p, st) {
   distance.innerText = `${d} Km`
   now.innerText = st
   speed.innerText = `${s} Km/s`
    progress.innerText = `${p} %`
    temp.innerText = `${t} C Cold side`

 }

update()

setInterval(update, 1000)


