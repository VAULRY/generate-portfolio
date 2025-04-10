function filterSkills(category) {
    const skillSections = document.querySelectorAll('.skills');
    skillSections.forEach((section) => {
      if (category === 'all' || section.classList.contains(category)) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
  }