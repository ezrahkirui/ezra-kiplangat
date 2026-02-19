/* ===== TYPING EFFECT ===== */
const text = ["Web Developer", "IT Student", "Problem Solver"];
let index = 0;
let charIndex = 0;
const typingSpeed = 150;
const typingElement = document.querySelector(".typing-text");

function type() {
    if (charIndex < text[index].length) {
        typingElement.textContent += text[index][charIndex];
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, 1000);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent = text[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 100);
    } else {
        index = (index + 1) % text.length;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (typingElement) type();
});

/* ===== FADE-IN SECTIONS ON SCROLL ===== */
const sections = document.querySelectorAll("section");

// Add fade-in only to sections below viewport
sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top > window.innerHeight) {
        section.classList.add("fade-in");
    }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("fade-in");
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

/* ===== BACK TO TOP BUTTON ===== */
const backToTopBtn = document.createElement("button");
backToTopBtn.id = "backToTop";
backToTopBtn.textContent = "↑ Top";
document.body.appendChild(backToTopBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ===== SMOOTH SCROLL FOR ANCHORS ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});
