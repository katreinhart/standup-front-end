// Timer Functions

const storedTimer = localStorage.getItem('timer')
let timerSeconds = storedTimer ? parseInt(storedTimer, 10) : 25 * 60
let timerRunning = false
let timerInterval

const timerButton = document.getElementById('timer-button')
const resetButton = document.getElementById('reset-button')
const timerDisplay = document.getElementById('timer-display')

const displayTimer = (secondsOnClock) => {
  const minutes = Math.floor(secondsOnClock / 60)
  let seconds = parseInt(secondsOnClock % 60, 10)
  if (seconds < 10) seconds = `0${seconds}`
  const timerString = `${minutes}:${seconds}`
  timerDisplay.textContent = timerString
  localStorage.setItem('timer', secondsOnClock)
}

timerButton.addEventListener('click', (e) => {
  if (timerRunning) {
    timerRunning = false
    clearInterval(timerInterval)
    timerButton.textContent = 'Start'
  } else {
    timerRunning = true
    timerButton.textContent = 'Pause'
    timerInterval = setInterval(() => {
      timerSeconds -= 1
      displayTimer(timerSeconds)
    }, 1000)
  }
})

resetButton.addEventListener('click', (e) => {
  timerSeconds = parseInt(25 * 60, 10)
  displayTimer(timerSeconds)
})
