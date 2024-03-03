


const openM = document.querySelector("#mobile");
const closeM = document.querySelector("#close");
const showContainer = document.querySelector(".container");


openM.addEventListener("click", () => {
  showContainer.style.display = "block";
  openM.style.display = "none";
  closeM.style.display = "block";

});
closeM.addEventListener("click", () => {
  showContainer.style.display = "none";
  openM.style.display = "block";
  closeM.style.display = "none";
});















// animation 

var duration = 15 * 2000;
var animationEnd = Date.now() + duration;
var skew = 1;

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

(function frame() {
  var timeLeft = animationEnd - Date.now();
  var ticks = Math.max(200, 500 * (timeLeft / duration));
  skew = Math.max(0.8, skew - 0.001);

  confetti({
    particleCount: 1,
    startVelocity: 0,
    ticks: ticks,
    origin: {
      x: Math.random(),
      // since particles fall down, skew start toward the top
      y: (Math.random() * skew) - 0.2
    },
    colors: ['#9290C3'],
    shapes: ['circle'],
    gravity: randomInRange(0.4, 0.6),
    scalar: randomInRange(0.4, 1),
    drift: randomInRange(-0.4, 0.4)
  });

  if (timeLeft > 0) {
    requestAnimationFrame(frame);
  }
}());


//header animation 

const headerAnimation = anime({
  targets: '#header',
  translateY: [-50, 0],
  opacity: [0, 1],
  easing: 'easeInOutQuad', // Easing function
  duration: 1000, // Duration of animation in milliseconds
  delay: 200, // Delay before animation starts in milliseconds
  loop: false // Animation does not loop

});
const lahcenImg = anime({
  targets: '#image',
  opacity: [0, 1],
  translateX: ['30%', '0%'],
  easing: 'easeInOutQuad',
  duration: 1500, // Duration of animation in milliseconds
  delay: 400, // Delay before animation starts in milliseconds
  loop: false // Animation does not loop
});
const lahcenTxt = anime({
  targets: '#left-text',
  opacity: [0, 1],
  translateX: ['0%', '10%'],
  easing: 'easeInOutQuad',
  duration: 1500, // Duration of animation in milliseconds
  delay: 400, // Delay before animation starts in milliseconds
  loop: false // Animation does not loop
});
const lahcenSocial = anime({
  targets: '#leftSocial',
  opacity: [0, 1],
  translateY: ['30%', '0%'],
  easing: 'easeInOutQuad',
  duration: 1500, // Duration of animation in milliseconds
  delay: 400, // Delay before animation starts in milliseconds
  loop: false // Animation does not loop
});
const lahcenLogo = anime({
  targets: '#logo',
  translateY: [-50, 0],
  opacity: [0, 1],
  easing: 'easeInOutQuad', // Easing function
  duration: 1000, // Duration of animation in milliseconds
  delay: 200, // Delay before animation starts in milliseconds
  loop: false// Animation does not loop
});
const lahcenMobile = anime({
  targets: '#mobile',
  translateX: [-90, 0],
  opacity: [0, 1],
  easing: 'easeInOutQuad', // Easing function
  duration: 1000, // Duration of animation in milliseconds
  delay: 200, // Delay before animation starts in milliseconds
  loop: false// Animation does not loop
});




// Trigger animation when the page loads

window.onload = function () {
  headerAnimation.play(); // Play the animation
};

//Scroll
const btn = document.getElementById('scrollBtn');
btn.addEventListener('click', function() {
  document.querySelector('.about').scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest"});
});