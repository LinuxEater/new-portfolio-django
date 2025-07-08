console.log("Script loaded successfully");
// featured projects expand collapse functionality
const panels = document.querySelectorAll('.panel')
console.log(panels) 


panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });

  panel.addEventListener('dblclick', () => {
    removeActiveClasses(); // Remove a classe active de todos
  });
});

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active');
  });
}

// all projects
const filterButtons = document.querySelectorAll('.filter-btn');
  const projects = document.querySelectorAll('.project-card');

  function showProjects(category) {
    projects.forEach((project, index) => {
      const projectCategory = project.getAttribute('data-category');
      const shouldShow = (category === 'all' || projectCategory === category);

      if (shouldShow) {
        project.style.display = 'block';
        setTimeout(() => {
          project.style.animation = 'fadeInUp 0.5s ease forwards';
        }, index * 100); // Delay em cascata para efeito visual
      } else {
        project.style.display = 'none';
        project.style.animation = 'none';
      }
    });
  }

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      showProjects(button.getAttribute('data-category'));
    });
  });

  // Mostrar todos inicialmente com animação
  showProjects('all');


// Typewriter effect for hero section
const roles = [
  "Full Stack Developer",
  "UX/UI Designer",
  "Back End Developer",
  "Software Engineer",
  "Front End Developer"
];

const typewriterElement = document.getElementById("typewriter");

let wordIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;
let typingSpeed = 100;
let deletingSpeed = 50;
let pauseTime = 1500;

function type() {
  const fullText = roles[wordIndex];
  
  if (isDeleting) {
    currentText = fullText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    currentText = fullText.substring(0, charIndex + 1);
    charIndex++;
  }

  typewriterElement.textContent = currentText;

  if (!isDeleting && charIndex === fullText.length) {
    setTimeout(() => {
      isDeleting = true;
      type();
    }, pauseTime);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % roles.length;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
  }
}

type();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
}); 

// scroll navbar when reachs the footer
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".custom-navbar");
  const footer = document.getElementById("site-footer");

  function updateNavbarPosition() {
    const footerTop = footer.getBoundingClientRect().top;
    const navbarHeight = navbar.offsetHeight;

    if (footerTop <= navbarHeight + 10) {
      // Remove posição fixa ao encostar no footer
      navbar.classList.remove("sticky");
    } else {
      // Mantém posição fixa
      navbar.classList.add("sticky");
    }
  }

  window.addEventListener("scroll", updateNavbarPosition);
});