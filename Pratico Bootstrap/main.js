const songs = [
  {
    title: 'Dark Victorian',
    artist: 'Chernabog',
    source: 'music/Dark Victorian.mp3',
    cover: 'img/Dark Castle.webp'
  },
  {
    title: 'Old Ruins',
    artist: 'Chernabog',
    source: 'music/Old Ruins and Ancient Temples.mp3',
    cover: 'img/Old Ruins.jpg'
  },
  {
    title: 'Bard Tavern',
    artist: 'Random Bard',
    source: 'music/Bard Tavern.mp3',
    cover: 'img/Tavern.jpg'
  }
]

// INICIO
let songIndex = 0

/** @type HTMLAudioElement */
const song = document.querySelector('#song')

const songName = document.querySelector('.descricao h2')
const songArtist = document.querySelector('.descricao i')
const songCover = document.querySelector('#radio-img')

const currentProgress = document.querySelector('progress')
const currentTime = document.querySelector('.tempo .inicio')
const duration = document.querySelector('.tempo .fim')

songName.textContent = songs[songIndex].title
songArtist.textContent = songs[songIndex].artist
songCover.setAttribute('src', songs[songIndex].cover)

renderSong(songIndex)

// EVENTOS
song.addEventListener('timeupdate', updateRange)
song.addEventListener('ended', renderSong(songIndex++))

document.querySelector('.botao-play').addEventListener('click', play)
document.querySelector('.botao-pause').addEventListener('click', pause)

document
  .querySelector('.anterior')
  .addEventListener('click', () => renderSong(songIndex < 0 ? 2 : songIndex--))

document
  .querySelector('.proximo')
  .addEventListener('click', () => renderSong(songIndex > 2 ? 0 : songIndex++))

// FUNÇÕES

function renderSong(index) {
  song.src = songs[index].source

  song.addEventListener('loadeddata', () => {
    songName.textContent = songs[index].title
    songArtist.textContent = songs[index].artist
    songCover.src = songs[index].cover

    currentTime.textContent = secondsToMinutes(song.currentTime)
    duration.textContent = secondsToMinutes(song.duration)
  })
}

function play() {
  song.play()
  document.querySelector('.botao-play').style.display = 'none'
  document.querySelector('.botao-pause').style.display = 'block'
}

function pause() {
  song.pause()
  document.querySelector('.botao-play').style.display = 'block'
  document.querySelector('.botao-pause').style.display = 'none'
}

function secondsToMinutes(seconds) {
  return new Date(seconds * 1000).toISOString().substr(11, 8)
}

function updateRange() {
  if (song.currentTime === 0) {
    currentProgress.value = song.currentTime
    return
  }

  currentProgress.value = song.currentTime / song.duration
  currentTime.textContent = secondsToMinutes(Math.floor(song.currentTime))
}
