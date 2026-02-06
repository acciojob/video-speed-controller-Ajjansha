const video = document.querySelector('.player__video');
const toggle = document.querySelector('.toggle');
const volume = document.querySelector('.volume');
const playbackSpeed = document.querySelector('.playbackSpeed');
const progressFilled = document.querySelector('.progress__filled');
const progress = document.querySelector('.progress');
const skipButtons = document.querySelectorAll('[data-skip]');

// Play / Pause
function togglePlay() {
  video.paused ? video.play() : video.pause();
}

// Update button icon
function updateButton() {
  toggle.textContent = video.paused ? '►' : '❚ ❚';
}

// Volume
function handleVolume() {
  video.volume = this.value;
}

// Speed
function handleSpeed() {
  video.playbackRate = this.value;
}

// Skip
function skip() {
  video.currentTime += Number(this.dataset.skip);
}

// Progress bar
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = `${percent}%`;
}

// Scrub
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Events
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
volume.addEventListener('input', handleVolume);
playbackSpeed.addEventListener('input', handleSpeed);
skipButtons.forEach(btn => btn.addEventListener('click', skip));

progress.addEventListener('click', scrub);
