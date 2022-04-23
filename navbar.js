const navbar = document.getElementById("navbar");

// Bootstrap `lg` size = 992px
if (window.innerWidth >= 992) {
  navbar.classList.add("show");
} else {
  const navbarLinks = navbar.querySelectorAll("a");
  navbarLinks.forEach((link) =>
    link.addEventListener("click", () => {
      // Immediately hide the navbar to show the scroll animation
      navbar.classList.remove("show");

      // After some time, trigger the bootstrap event for hiding the navbar
      setTimeout(() => {
        bootstrap.Offcanvas.getInstance(navbar).hide();
      }, 500);
    })
  );
}
