
const showContainer = document.querySelector(".container");
const logoR = document.querySelector("#logo");
const scrollButton = document.querySelector('.scroll');
const itemList = document.querySelectorAll(".item-list ul li");
// console.log(itemList)
const mainList = document.querySelector(".main");

// itemList.addEventListener("click" , () => {
//       mainList.style.display = "none";
// })
logoR.addEventListener("click", () => location.href = "index.html");
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) { 
    scrollButton.style.display = 'none';


  }
  else {
    scrollButton.style.display = 'block';
  }
});

logoR.addEventListener("click", () => location.href = "index.html");





//scroll blur
// Listen to the scroll event
window.addEventListener('scroll', function () {

  var header = document.querySelector('header');
  header.style.backdropFilter = 'blur(' + (window.scrollY / 50) + 'px)';
  header.style.boxShadow = "0 2px 8px #A19FD5";
  if (window.scrollY < 110) {
    header.style.boxShadow = "none";

  }

});



// animation 

var duration = 15 * 1000;
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
  duration: 3500, // Duration of animation in milliseconds
  delay: 200, // Delay before animation starts in milliseconds
  loop: false // Animation does not loop

});
const lahcenImg = anime({
  targets: '#image',
  opacity: [0, 1],
  translateX: ['30%', '0%'],
  easing: 'easeInOutQuad',
  duration: 3500, // Duration of animation in milliseconds
  delay: 400, // Delay before animation starts in milliseconds
  loop: false // Animation does not loop
});
const lahcenTxt = anime({
  targets: '#left-text',
  opacity: [0, 1],
  translateX: ['0%', '10%'],
  easing: 'easeInOutQuad',
  duration: 3500, // Duration of animation in milliseconds
  delay: 400, // Delay before animation starts in milliseconds
  loop: false // Animation does not loop
});
const lahcenSocial = anime({
  targets: '#leftSocial',
  opacity: [0, 1],
  translateY: ['30%', '0%'],
  easing: 'easeInOutQuad',
  duration: 3500, // Duration of animation in milliseconds
  delay: 400, // Delay before animation starts in milliseconds
  loop: false // Animation does not loop
});
const lahcenLogo = anime({
  targets: '#logo',
  translateY: [-50, 0],
  opacity: [0, 1],
  easing: 'easeInOutQuad', // Easing function
  duration: 3500, // Duration of animation in milliseconds
  delay: 200, // Delay before animation starts in milliseconds
  loop: false// Animation does not loop
});






// Trigger animation when the page loads

window.onload = function () {
  headerAnimation.play(); // Play the animation
};

//Scroll
const btn = document.querySelector('.scroll');
btn.addEventListener('click', function () {
  document.querySelector('.about').scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
});


document.addEventListener("DOMContentLoaded", () => {
  // Simulate an API request or any async operation
  setTimeout(() => {
    hideLoader();
    showContent();
    const darkmode = new Darkmode(options);
darkmode.showWidget();

  }, 2200); // Replace with your actual data loading logic and time

  function hideLoader() {
    const loader = document.getElementById("loader");

    loader.style.display = "none";

  }

  function showContent() {
    const content = document.getElementById("content");
    content.style.display = "block";

  }
});

//scroll Up
const scrollBtn = document.getElementById("scroll-up");
const scrollUp = () => {
  this.scrollY >= 350 ? scrollBtn.classList.add("show-scroll") : scrollBtn.classList.remove("show-scroll");

}
window.addEventListener('scroll', scrollUp);
// Scroll to top when button is clicked
scrollBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

//toggle
const options = {
  bottom: '695px', // default: '32px'
  right: '100px', // default: '32px'
  left: 'unset', // default: 'unset'
  time: '.8s', // default: '0.3s'
  mixColor: 'white', // default: '#fff'
  backgroundColor: '#061423',  
  buttonColorDark: 'white',  
  buttonColorLight: '#061423', 
  saveInCookies: false, 
  label: '🌓', 
  autoMatchOsTheme: true 
}
