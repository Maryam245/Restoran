window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('bg-dark', 'navbar-dark');
      navbar.classList.remove('bg-transparent', 'navbar-light');
    } else {
      navbar.classList.add('bg-transparent', 'navbar-light');
      navbar.classList.remove('bg-dark', 'navbar-dark');
    }
  });