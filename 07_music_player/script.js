const audio = document.getElementById("playerMusicAudio");
const thumbnail = document.getElementById("thumbnail");
const song_name = document.getElementById("songName");
const song_author = document.getElementById("songAuthor");
const current_time = document.getElementById("currentTime");
const total_time = document.getElementById("totalTime");
const progress_container = document.getElementById("progressContainer");
const progress = document.getElementById("progress");
const play_pause = document.getElementById("playPause");
const icon = play_pause.querySelector("img");

function secondsToMMSS(seconds) {
  seconds = Math.round(seconds);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");
  return `${formattedMinutes}:${formattedSeconds}`;
}

const updateProgressBar = () => {
  const progress_value = (audio.currentTime / audio.duration) * 100;
  progress.style.width = progress_value + "%";
  current_time.innerHTML = secondsToMMSS(audio.currentTime);
};

const loadAudio = () => {
  current_time.innerHTML = secondsToMMSS(audio.currentTime);
  total_time.innerHTML = secondsToMMSS(audio.duration);
};

const clickProgressBar = (event) => {
  const total_width = progress_container.clientWidth;
  const click_at = event.offsetX;
  const click_percent = (click_at / total_width) * 100;

  const seek_time = (click_percent / 100) * audio.duration;
  audio.currentTime = seek_time;
};

const playPause = () => {
  if (audio.paused) {
    audio.play();
    icon.src = "images/Pause_fill.svg";
  } else {
    audio.pause();
    icon.src = "images/Play_fill.svg";
  }
};

const previousSong = () => {
  audio.src = "images/lost-in-city-lights-145038.mp3";
  thumbnail.src = "images/cover-1.png";
  song_name.innerHTML = "Lost in the City Lights";
  song_author.innerHTML = "Cosmo Sheldrake";
};

const nextSong = () => {
  audio.src = "images/forest-lullaby-110624.mp3";
  thumbnail.src = "images/cover-2.png";
  song_name.innerHTML = "Forest Lullaby";
  song_author.innerHTML = "Lesfm";
};

loadAudio();

play_pause.addEventListener("click", playPause);

audio.addEventListener("loadedmetadata", loadAudio);
audio.addEventListener("timeupdate", updateProgressBar);
