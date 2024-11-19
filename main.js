const imageContainer = document.querySelector('.image-container');
const audio = new Audio();
const songTitle = document.getElementById("song-title");
const songArtist = document.getElementById("song-artist");
const songImg = document.getElementById("song-img");
const playPauseBtn = document.getElementById("play-pause");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progressBar = document.getElementById("progress-bar");

const songs = [
    { title: "Star Signs", artist: "Odunsi", file: "song1.mp3" },
    { title: "Ligali", artist: "Asake", file: "song2.mp3" },
    { title: "Fi Kan We Kan", artist: "Bnxn, Rema", file: "song3.mp3" },
    { title: "Apala Disco", artist: "Terry Apala", file: "song4.mp3" },
    { title: "Kese (Dance)", artist: "Wizkid", file: "song5.mp3" },
    { title: "Soweto", artist: "Michael Brün", file: "song6.mp3" },
    { title: "Adaugo", artist: "Cavemen", file: "song7.mp3" },
    { title: "Avoid Things", artist: "Tems", file: "song8.mp3" },
];

let currentSongIndex = 0;
let x = 0;
// let timer;

function updateGallery(){
    imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    // timer = setTimeout( () => {
    //     x = x - 45;
    //     updateGallery();
    // }, 500000)
}

// updateGallery()

function loadSong(index) {
    const song = songs[index];
    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;
    audio.src = song.file;
}

function playSong() {
    audio.play();
    playPauseBtn.textContent = "Pause";
}

function pauseSong() {
    audio.pause();
    playPauseBtn.textContent = "Play";
}

function togglePlayPause() {
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    playSong();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    playSong();
}

function updateProgressBar() {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress || 0;
}

function setAudioProgress() {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
}


prevBtn.addEventListener('click', () => {
    x = x + 45;
    // clearTimeout(timer);
    updateGallery();
})

nextBtn.addEventListener('click', () => {
    x = x - 45;
    // clearTimeout(timer);
    updateGallery();
})

playPauseBtn.addEventListener("click", togglePlayPause);
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
audio.addEventListener("timeupdate", updateProgressBar);
progressBar.addEventListener("input", setAudioProgress);

loadSong(currentSongIndex);
