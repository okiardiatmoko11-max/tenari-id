<<<<<<< HEAD
const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

// Sticky Navbar
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile Menu
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close menu on link click
document.querySelectorAll(".nav-link, .btn").forEach((n) =>
  n.addEventListener("click", () => {
    navLinks.classList.remove("active");
  }),
);
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".testimonial-track");
  const slides = document.querySelectorAll(".testimonial-card");

  if (!track || slides.length === 0) {
    console.log("Testimonial slider: element not found");
    return;
  }

  let index = 0;

  setInterval(() => {
    index = (index + 1) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
  }, 4000);
});
=======
const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

// Sticky Navbar
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile Menu
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close menu on link click
document.querySelectorAll(".nav-link, .btn").forEach((n) =>
  n.addEventListener("click", () => {
    navLinks.classList.remove("active");
  }),
);
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".testimonial-track");
  const slides = document.querySelectorAll(".testimonial-card");

  if (!track || slides.length === 0) {
    console.log("Testimonial slider: element not found");
    return;
  }

  let index = 0;

  setInterval(() => {
    index = (index + 1) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
  }, 4000);
});
>>>>>>> 52b173e (perbaikan tampilan mobile dan fitur)
