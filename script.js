document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  const hamburguer = document.querySelector(".hamburguer");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-menu a");

  hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburguer.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  const readingProgress = document.getElementById("reading-progress");

  window.addEventListener("scroll", () => {
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progress = (window.scrollY / totalHeight) * 100;
      readingProgress.style.width = `${progress}%`;
    }
  });

  const emailBtn = document.querySelector(".email-link");

  const user = "lobato.ph17";
  const domain = "gmail.com";
  const fullEmail = `${user}@${domain}`;

  if (emailBtn) {
    emailBtn.setAttribute("href", `mailto:${fullEmail}`);

    emailBtn.addEventListener("click", (e) => {
      e.preventDefault();

      navigator.clipboard.writeText(fullEmail).then(() => {
        const originalText = emailBtn.innerHTML;

        emailBtn.innerHTML = `E-mail copiado! <i class="fa-solid fa-check" style="color: #10b981;"></i>`;

        setTimeout(() => {
          emailBtn.innerHTML = originalText;
        }, 2000);
      });
    });
  }

  const elementosParaAnimar = document.querySelectorAll(
    ".projeto-card-v, .skill-card, .sobre-wrapper",
  );

  const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px",
  };

  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, observerOptions);

  elementosParaAnimar.forEach((elemento) => {
    elemento.classList.add("reveal-hidden");
    scrollObserver.observe(elemento);
  });
});
