let storedTimer = localStorage.getItem('timer')
let timerSeconds = storedTimer ? parseInt(storedTimer) : 25 * 60
let timerRunning = false
let timerInterval 

const timerButton = document.getElementById('timer-button')
const resetButton = document.getElementById('reset-button')
const timerDisplay = document.getElementById('timer-display')

timerButton.addEventListener('click', (e) => {
  if(timerRunning) {
    timerRunning = false
    clearInterval(timerInterval)
    timerButton.textContent = 'Start'
  } else {
    timerRunning = true
    timerButton.textContent = 'Pause'
    timerInterval = setInterval(() => {
      timerSeconds--
      displayTimer(timerSeconds)
    }, 1000)
  }
})

displayTimer = (timerSeconds) => {
  let minutes = Math.floor(timerSeconds / 60)
  let seconds = parseInt(timerSeconds % 60)
  if(seconds < 10) seconds = '0' + seconds
  let timerString = `${minutes}:${seconds}`
  timerDisplay.textContent = timerString
  localStorage.setItem('timer', timerSeconds)
}

resetButton.addEventListener('click', e => {
  timerSeconds = parseInt(25 * 60)
  displayTimer(timerSeconds)
})
