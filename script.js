

//lance la fonction toutes les 1000 millisecondes
setInterval(setClock, 1000)

const hoursDiv = document.querySelector('.hand.hour')
const minutesDiv = document.querySelector('.hand.minute')
const secondsDiv = document.querySelector('.hand.second')

function setClock() {
    const now = new Date()

    const seconds = now.getSeconds() 
    const minutes = now.getMinutes() 
    const hours = now.getHours() 

    //combien de degrés fait une seconde
    const secondsDeg = ((seconds/60)*360)
    const minutesDeg = ((minutes/60)*360)
    const hoursDeg = ((hours/12)*360)

    secondsDiv.style.transform = `rotate(${secondsDeg}deg)`
    minutesDiv.style.transform = `rotate(${minutesDeg}deg)`
    hoursDiv.style.transform = `rotate(${hoursDeg}deg)`
   
}

