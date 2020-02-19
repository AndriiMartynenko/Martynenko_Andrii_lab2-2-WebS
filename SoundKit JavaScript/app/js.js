const clapSound = document.querySelector('#clap')
const boomSound = document.querySelector('#boom')
const hihatSound = document.querySelector('#hihat')
const kickSound = document.querySelector('#kick')
const openhatSound = document.querySelector('#openhat')
const rideSound = document.querySelector('#ride')
const snareSound = document.querySelector('#snare')
const tinkSound = document.querySelector('#tink')
const tomSound = document.querySelector('#tom')
const record = document.querySelector('#record')
const play = document.querySelector('#play')
const channelArray = []
let channelStartTime = 0

document.body.addEventListener('keypress', (e) => {
  playSound(e.code)
  const time = Date.now() - channelStartTime
  channelArray.push({
    code: e.code,
    time: time
  })
})

record.addEventListener('click', () => {
  channelStartTime = Date.now()
})

play.addEventListener('click', () => {
  channelArray.forEach(el => {
    setTimeout(playSound, el.time, el.code)
  })
})

function playSound(code) {
  switch (code) {
    case 'KeyA':
      clapSound.currentTime = 0
      clapSound.play()
      break
    case 'KeyS':
      boomSound.currentTime = 0
      boomSound.play()
      break
    case 'KeyD':
      hihatSound.currentTime = 0
      hihatSound.play()
      break
    case 'KeyF':
      kickSound.currentTime = 0
      kickSound.play()
      break
    case 'KeyG':
      openhatSound.currentTime = 0
      openhatSound.play()
      break
    case 'KeyH':
      rideSound.currentTime = 0
      rideSound.play()
      break
    case 'KeyJ':
      snareSound.currentTime = 0
      snareSound.play()
      break
    case 'KeyK':
      tinkSound.currentTime = 0
      tinkSound.play()
      break
    case 'KeyL':
      tomSound.currentTime = 0
      tomSound.play()
      break
  }
}