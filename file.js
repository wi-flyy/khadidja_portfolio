
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


//the form validation part in js:

 const form = document.getElementById("contactForm");

  form.addEventListener("submit", function(event) {
    let valid = true;

    // clear errors
    document.getElementById("nameError").innerText = "";
    document.getElementById("surnameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("messageError").innerText = "";

    // Name
    const name = document.getElementById("name").value.trim();
    if (name === "") {
      document.getElementById("nameError").innerText = "Name is required.";
      valid = false;
    }
    
    // Name
    const surname = document.getElementById("surname").value.trim();
    if (surname === "") {
      document.getElementById("surnameError").innerText = "surname is required.";
      valid = false;
    }

    // Email
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
      document.getElementById("emailError").innerText = "Email is required.";
      valid = false;
    } else if (!email.match(emailPattern)) {
      document.getElementById("emailError").innerText = "Enter a valid email.";
      valid = false;
    }

    // Message
    const message = document.getElementById("message").value.trim();
    if (message === "") {
      document.getElementById("messageError").innerText = "Message is required.";
      valid = false;
    }

    // Stop submission if invalid
    if (!valid) {
      event.preventDefault();
    }
  });

