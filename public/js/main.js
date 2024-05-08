
const showContainer = document.querySelector(".container");
const logoR = document.querySelector("#logo");
const scrollButton = document.querySelector('.scroll');

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

// mobile nav
function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}

function closeMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.remove('active');
}

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
  easing: 'easeInOutQuad',
  duration: 3500,
  delay: 200,
  loop: false

});
const lahcenImg = anime({
  targets: '#image',
  opacity: [0, 1],
  translateX: ['30%', '0%'],
  easing: 'easeInOutQuad',
  duration: 3500,
  delay: 400,
  loop: false
});
const lahcenTxt = anime({
  targets: '#left-text',
  opacity: [0, 1],
  translateX: ['0%', '10%'],
  easing: 'easeInOutQuad',
  duration: 3500,
  delay: 400,
  loop: false
});
const lahcenSocial = anime({
  targets: '#leftSocial',
  opacity: [0, 1],
  translateY: ['30%', '0%'],
  easing: 'easeInOutQuad',
  duration: 3500,
  delay: 400,
  loop: false

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
const lahcenSkill = anime({
  targets: '.relative img:not(:nth-child(1))',
  translateY: [-10, 0],
  opacity: [1],
  direction: 'alternate',
  easing: 'linear',

  duration: 2000, // Duration of animation in milliseconds
  delay: 200, // Delay before animation starts in milliseconds
  loop: true// Animation does not loop
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
  bottom: '100%', // default: '32px'
  time: '.3s', // default: '0.3s'
  mixColor: 'white', // default: '#fff'
  backgroundColor: '#061423',
  buttonColorDark: 'white',
  buttonColorLight: '#061423',
  saveInCookies: false,
  label: '🌓',
  autoMatchOsTheme: true
}
// function filter text with color
const filterButtons = document.querySelectorAll('.filter-btn');
const projectBoxes = document.querySelectorAll('.project-box');
const searchInput = document.getElementById('searchInput');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filterValue = button.getAttribute('data-filter');

        projectBoxes.forEach(box => {
            const category = box.getAttribute('data-category');

            if (filterValue === 'all' || filterValue === category) {
                box.style.display = 'block';
            } else {
                box.style.display = 'none';
            }
        });
    });
});

searchInput.addEventListener('input', () => {
    const searchValue = searchInput.value.toLowerCase();

    projectBoxes.forEach(box => {
        const title = box.querySelector('.project-title');
        const description = box.querySelector('.project-description');

        const titleText = title.textContent.toLowerCase();
        const descriptionText = description.textContent.toLowerCase();

        if (titleText.includes(searchValue) || descriptionText.includes(searchValue)) {
            title.innerHTML = highlightMatch(titleText, searchValue);
            description.innerHTML = highlightMatch(descriptionText, searchValue);
            box.style.display = 'block';
        } else {
            title.innerHTML = titleText;
            description.innerHTML = descriptionText;
            box.style.display = 'none';
        }
    });
});

function highlightMatch(text, searchValue) {
    return text.replace(new RegExp(searchValue, 'gi'), match => `<span class="highlight">${match}</span>`);
}
AOS.init();


