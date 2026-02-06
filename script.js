const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');
const volume = player.querySelector('.volume');
const playbackSpeed = player.querySelector('.playbackSpeed');
const skipButtons = player.querySelectorAll('[data-skip]');
const progress = player.querySelector('.progress');
const progressFilled = player.querySelector('.progress__filled');

// Play / Pause
function togglePlay() {
  video.paused ? video.play() : video.pause();
}

// Update play button
function updateButton() {
  toggle.textContent = video.paused ? '►' : '❚ ❚';
}

// Volume control
function handleVolume() {
  video.volume = this.value;
}

// Playback speed control
function handlePlaybackSpeed() {
  video.playbackRate = this.value;
}

// Skip functionality
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

// Progress bar update
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = `${percent}%`;
}

// Scrubbing
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
volume.addEventListener('input', handleVolume);
playbackSpeed.addEventListener('input', handlePlaybackSpeed);
skipButtons.forEach(btn => btn.addEventListener('click', skip));

let isMouseDown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousedown', () => isMouseDown = true);
progress.addEventListener('mouseup', () => isMouseDown = false);
progress.addEventListener('mousemove', e => isMouseDown && scrub(e));
