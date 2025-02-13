const subtitles = [
  "Software Engineer",
  "Backend Engineer",
  "Full Stack Developer",
  "Building Scalable Systems",
  "Designing Responsive UIs",
];

const subtitleElement = document.querySelector(".subtitle");

let subtitleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  let currentText = subtitles[subtitleIndex];
  let displayedText = currentText.substring(0, charIndex);

  subtitleElement.textContent = displayedText;

  if (!isDeleting && charIndex < currentText.length) {
    charIndex++;
    setTimeout(typeEffect, 80);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 40);
  } else {
    if (!isDeleting) {
      setTimeout(() => {
        isDeleting = true;
        typeEffect();
      }, 800);
    } else {
      isDeleting = false;
      subtitleIndex = (subtitleIndex + 1) % subtitles.length;
      setTimeout(typeEffect, 200);
    }
  }
}

document.addEventListener("DOMContentLoaded", () =>
  setTimeout(typeEffect, 500)
);
