const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function handleMove(e) {
  // Get position inside the speed container
  const y = e.offsetY;
  const percent = y / speed.offsetHeight;

  // Set min and max playback speed
  const min = 0.4;
  const max = 4;

  // Calculate playback rate
  const playbackRate = percent * (max - min) + min;

  // Update bar height & text
  bar.style.height = `${Math.round(percent * 100)}%`;
  bar.textContent = playbackRate.toFixed(1) + '×';

  // Apply speed to video
  video.playbackRate = playbackRate;
}

// Mouse move inside speed bar
speed.addEventListener('mousemove', handleMove);
