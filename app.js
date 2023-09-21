const daysContainer = document.querySelector('#days')
const hoursContainer = document.querySelector('#hours')
const minutesContainer = document.querySelector('#minutes')
const secondsContainer = document.querySelector('#seconds')
const spinnerLoading = document.querySelector('#loading')
const countdownContainer = document.querySelector('#countdown')

const newYear = new Date().getFullYear() + 1
const newDate = new Date(`January 01 ${newYear} 00:00:00`)

const updateCountDown = () =>{
    const currencyTime = new Date()
    const differente = newDate - currencyTime
    const days = Math.floor(differente / 1000 / 60 / 60 / 24)
    const hours = Math.floor(differente / 1000 / 60 / 60 ) % 24
    const minutes = Math.floor(differente / 1000 / 60 ) % 60
    const seconds = Math.floor(differente / 1000 ) % 60

    daysContainer.textContent = days < 10 ? "0" + days : days
    hoursContainer.textContent = hours < 10 ? "0" + hours : hours
    minutesContainer.textContent = minutes < 10 ? "0" + minutes : minutes
    secondsContainer.textContent = seconds < 10 ? "0" + seconds : seconds
    console.log({days, hours, minutes, seconds})
}

//tirar o delei que os valores ficam zerados
setTimeout( ()=>{
    spinnerLoading.remove()
    countdownContainer.style.display = 'flex'
}, 1000)

setInterval(updateCountDown, 1000)