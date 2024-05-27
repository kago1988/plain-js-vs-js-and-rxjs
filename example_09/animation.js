let step = 0;
const maxSteps = 5;

function animate() {
  if (step < maxSteps) {
    console.log('Animation step:', step);
    step++;
    setTimeout(animate, 1000);
  }
}

animate();
