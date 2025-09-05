
  const photo = document.getElementById("floating-photo");

  document.addEventListener("mousemove", (e) => {
    const x = (e.clientX - window.innerWidth / 2) / 20;
    const y = (e.clientY - window.innerHeight / 2) / 20;


    photo.style.transform = `translate(${x}px, ${y}px)`;
  } ) ;




 const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav_st");

  window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === "#" + sectionId) {
            link.classList.add("active");
          }
        });
      }
    });
  });



  window.addEventListener("scroll", () => {
  const about = document.querySelector(".about-container");
  if (about.getBoundingClientRect().top < window.innerHeight - 100) {
    about.classList.add("show");
  }
});



