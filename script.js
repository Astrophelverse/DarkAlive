// Starfield Background
const canvas = document.getElementById("stars-bg");
const ctx = canvas.getContext("2d");

let stars = [];
let numStars = 100;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

// Create stars
for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5,
    speed: Math.random() * 0.5 + 0.2,
  });
}

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#0ff";

  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();

    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(animateStars);
}

animateStars();

// script.js

// Animate hero section on load
gsap.from(".hero-content h1", {
  y: -100,
  opacity: 0,
  duration: 1.5,
  ease: "power4.out"
});

gsap.from(".hero-content p", {
  y: 50,
  opacity: 0,
  delay: 0.5,
  duration: 1.2,
  ease: "power2.out"
});
// Animate each project card
gsap.utils.toArray(".project-card").forEach(card => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2
  });
});

// Scroll-triggered section animations
gsap.utils.toArray(".section").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none reset"
    },
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out"
  });
});
// Scroll Progress Bar
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById("scrollProgress").style.width = `${scrollPercent}%`;
});
