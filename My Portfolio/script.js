const textElement = document.getElementById('animated-text');
const originalText = textElement.textContent;

function animateText(text, index) {
  if (index < text.length) {
    textElement.textContent = text.substring(0, index + 1);
    setTimeout(() => {
      animateText(text, index + 1);
    }, 50); 
  } else {
    setTimeout(() => {
      animateText(originalText, 0);
    }, 1500); 
  }
}

window.onload = () => {
  animateText(originalText, 0);
};

// Get reference to the nav CONTACT button and the contact form
const contactButton = document.querySelector('a[href="#contact"]');
const contactForm = document.getElementById('contactForm');

// Add a click event listener to the CONTACT button
contactButton.addEventListener("click", function (event) {
  event.preventDefault();

  // Calculate the Y position of the contact form
  const formYPosition = contactForm.getBoundingClientRect().top + window.scrollY;

  // Scroll smoothly to the contact form
  window.scrollTo({
    top: formYPosition,
    behavior: "smooth", // Use smooth scrolling
  });
});

// Get reference to the nav PROJECTS link
const projectsLink = document.querySelector('a[href="#project-display"]');
const projectDisplaySection = document.getElementById('project-display');

// Add a click event listener to the PROJECTS link
projectsLink.addEventListener("click", function (event) {
  event.preventDefault();

  // Calculate the Y position of the project-display section
  const projectDisplayYPosition = projectDisplaySection.getBoundingClientRect().top + window.scrollY;

  // Scroll smoothly to the project-display section
  window.scrollTo({
    top: projectDisplayYPosition,
    behavior: "smooth", // Use smooth scrolling
  });
});

// Get reference to the nav ABOUT link
const aboutLink = document.querySelector('a[href="#section-over"]');
const overveiwSection = document.getElementById('section-over');

// Add a click event listener to the ABOUT link
aboutLink.addEventListener("click", function (event) {
  event.preventDefault();

  // Calculate the Y position of the section-over section
const overveiwSectionYPosition = overveiwSection.getBoundingClientRect().top + window.scrollY;

  // Scroll smoothly to the section-over section
window.scrollTo({
    top: overveiwSectionYPosition,
    behavior: "smooth",
  });
});