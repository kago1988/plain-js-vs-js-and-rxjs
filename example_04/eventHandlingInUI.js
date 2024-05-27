const dragTarget = document.getElementById('dragTarget');
let isDragging = false;

dragTarget.addEventListener('mousedown', () => {
  isDragging = true;
});

document.addEventListener('mousemove', event => {
  if (isDragging) {
    dragTarget.style.left = `${event.clientX}px`;
    dragTarget.style.top = `${event.clientY}px`;
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});
