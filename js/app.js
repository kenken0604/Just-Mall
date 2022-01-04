//DOM
const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

// const countdown = document.getElementById('countdown')
// const loading = document.getElementById('loading')

const currentYear = new Date().getFullYear()
// console.log(currentYear)

const newYearTime = new Date(`April 01 ${currentYear} 00:00:00`)
// console.log(newYearTime)

function updateCountdown() {
  const currentTime = new Date()
  const leftTime = newYearTime - currentTime
  //   console.log(leftTime) //得到毫秒的單位

  const d = Math.floor(leftTime / 1000 / 60 / 60 / 24)
  const h = Math.floor(leftTime / 1000 / 60 / 60) % 24
  const m = Math.floor(leftTime / 1000 / 60) % 60
  const s = Math.floor(leftTime / 1000) % 60
  //   console.log(d, h, m, s)

  days.innerHTML = d < 10 ? '0' + d : d
  hours.innerHTML = h < 10 ? '0' + h : h
  minutes.innerHTML = m < 10 ? '0' + m : m
  seconds.innerHTML = s < 10 ? '0' + s : s
}

// setTimeout(() => {
// loading.remove()
// countdown.style.display = 'flex'
// }, 1000)

setInterval(updateCountdown, 1000)
