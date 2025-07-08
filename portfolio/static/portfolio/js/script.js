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