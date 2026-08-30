window.addEventListener('scroll', () => {
    if (window.scrollY > 750) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.dropdown');
  const button = document.querySelector('.dropbtn');

  // Toggle permanent open on click
  button.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevents the document click listener from firing immediately
    dropdown.classList.toggle('is-active');
  });

  // Close the dropdown safely if user clicks anywhere else on the window
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('is-active');
    }
  });
});
