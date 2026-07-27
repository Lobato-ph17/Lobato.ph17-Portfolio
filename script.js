document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // 1. NAVBAR DINÂMICA (Efeito Glassmorphism)
  // ==========================================
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // ==========================================
  // 2. MENU MOBILE (Hambúrguer)
  // ==========================================
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

  // ==========================================
  // 3. PROGRESSED BOTÃO VOLTAR AO TOPO (Circular)
  // ==========================================
  const backToTopBtn = document.getElementById("back-to-top");
  const circularProgress = document.getElementById("circular-progress");
  const totalCircumference = 150.8; // Perímetro do nosso círculo geométrico

  window.addEventListener("scroll", () => {
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    if (totalHeight > 0) {
      // Calcula a porcentagem do scroll (0 a 1)
      const scrollPercent = window.scrollY / totalHeight;

      // Atualiza o offset do traço do SVG para preencher o contorno
      circularProgress.style.strokeDashoffset =
        totalCircumference - scrollPercent * totalCircumference;
    }

    // Mostra o botão fixo apenas se o usuário descer mais de 300px da tela
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  // Ação suave de clique para rolar até o topo
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // ==========================================
  // 4. ANTI-SPAM INTELIGENTE + COPIAR E-MAIL
  // ==========================================
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

  // ==========================================
  // 5. INJEÇÃO DINÂMICA DA LUZ DE BORDA (SVG)
  // ==========================================
  const cardsProjetos = document.querySelectorAll(".projeto-card-v");

  cardsProjetos.forEach((card) => {
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("class", "card-laser-border");

    const rect = document.createElementNS(svgNS, "rect");
    rect.setAttribute("rx", "12");
    rect.setAttribute("ry", "12");
    rect.setAttribute("pathLength", "100");

    svg.appendChild(rect);
    card.appendChild(svg);
  });

  // ==========================================
  // 6. ANIMAR CARDS AO ROLAR (Scroll Reveal Infinito)
  // ==========================================
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

  // ==========================================
  // 7. Toggle Light / Dark mode
  // ==========================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'light') {
        document.body.classList.add('light-theme');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    } else {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        
        let theme = 'dark';
        if (document.body.classList.contains('light-theme')) {
            theme = 'light';
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        } else {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }
        
        localStorage.setItem('theme', theme);
  });

  // --- TOGGLE PT / EN (LABEL) ---
  const langToggleBtn = document.getElementById('lang-toggle');
  const langLabel = document.getElementById('lang-label');

  langToggleBtn.addEventListener('click', () => {
      if (langLabel.textContent === 'EN') {
          langLabel.textContent = 'PT';
      } else {
          langLabel.textContent = 'EN';
      }
  });
});
