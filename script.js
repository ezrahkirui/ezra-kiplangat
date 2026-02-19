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
