
const songs = [
    { title: "Song 1", src: "music/01. Ground Theme.mp3", img: "img.jpg" },
    { title: "Song 2", src: "music/02. Underground Theme.mp3", img: "img.jpg" },
    { title: "Song 3", src: "music/03. Underwater Theme.mp3", img: "img.jpg" },
    { title: "Song 4", src: "music/04. Castle Theme.mp3", img: "img.jpg" }
];

let currentSong = 0;
const audio = document.getElementById("audioPlayer");
const progress = document.getElementById("progress");
const playPauseBtn = document.getElementById("playPauseBtn");
const volumeLevel = document.getElementById("volumeLevel");

function loadSong(index) {
    const song = songs[index];
    document.getElementById("songTitle").textContent = song.title;
    document.getElementById("albumArt").src = song.img;
    audio.src = song.src;
    audio.pause();
    playPauseBtn.textContent = "▶️";
}

function playPause() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = "⏸️";
    } else {
        audio.pause();
        playPauseBtn.textContent = "▶️";
    }
}

function nextSong() {
    currentSong = (currentSong + 1) % songs.length;
    loadSong(currentSong);
    playPause();
}

function prevSong() {
    currentSong = (currentSong - 1 + songs.length) % songs.length;
    loadSong(currentSong);
    playPause();
}

function increaseVolume() {
    if (audio.volume < 1) {
        audio.volume = Math.min(audio.volume + 0.1, 1);
        updateVolumeDisplay();
    }
}

function decreaseVolume() {
    if (audio.volume > 0.1) {
        audio.volume = Math.max(audio.volume - 0.1, 0);  // Ensures it can fully mute
    } else {
        audio.volume = 0;  // Mute completely
    }
    updateVolumeDisplay();
}

function updateVolumeDisplay() {
    volumeLevel.textContent = Math.round(audio.volume * 100) + "%";
}

// Auto-update progress bar
audio.addEventListener("timeupdate", () => {
    progress.value = (audio.currentTime / audio.duration) * 100;
});

progress.addEventListener("input", () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});

// Initialize
loadSong(currentSong);
updateVolumeDisplay();
