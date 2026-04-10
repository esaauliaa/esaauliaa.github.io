console.log("Portfolio Esa Aulia ready!");

// NAVBAR
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

// ANIMASI
const reveals = document.querySelectorAll(".reveal");

// NAVBAR ACTIVE
function updateActiveNav() {
  let currentSection = "home";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (window.scrollY >= sectionTop - 150) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}

// SCROLL NAVBAR
window.addEventListener("scroll", updateActiveNav);
window.addEventListener("load", updateActiveNav);

// ANIMASI REPEATABLE
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show"); // biar bisa animasi lagi
    }
  });
}, {
  threshold: 0.2
});

// APPLY
reveals.forEach((el) => {
  observer.observe(el);
});