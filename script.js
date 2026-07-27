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

    // --- DICIONÁRIO DE TRADUÇÃO (PT / EN) ---
  const translations = {
      pt: {
          "nav-about": "Sobre",
          "nav-projects": "Projetos",
          "nav-skills": "Skills",
          "nav-contact": "Contato",
          "open-to-work": "DISPONÍVEL PARA TRABALHO",
          "hero-subtitle-mini": "DESENVOLVEDOR FULL-STACK",
          "hero-title": "Construindo Aplicações Escaláveis & de Alta Performance.",
          "hero-desc": "Foco em criar software moderno, limpo e entregar experiências excepcionais.",
          "btn-projects": "Ver Projetos",
          "plstock-desc": "Sistema completo de gerenciamento de estoque, produtos e finanças para controle de vendas e catálogo reativo.",
          "plmarket-desc": "Plataforma de e-commerce e marketplace com foco em performance, segurança e uma experiência de compra fluida."
      },
      en: {
          "nav-about": "About",
          "nav-projects": "Projects",
          "nav-skills": "Skills",
          "nav-contact": "Contact",
          "open-to-work": "OPEN TO WORK",
          "hero-subtitle-mini": "FULL-STACK DEVELOPER",
          "hero-title": "Building Scalable & High-Performance Applications.",
          "hero-desc": "Focused on creating modern, clean software and delivering exceptional experiences.",
          "btn-projects": "View Projects",
          "plstock-desc": "Complete inventory, product, and finance management system for sales control and reactive catalog.",
          "plmarket-desc": "E-commerce and marketplace platform focused on performance, security, and seamless shopping experience."
      }
  };

  // --- LOGICA DE TROCA DE IDIOMA ---
  const langToggleBtn = document.getElementById('lang-toggle');
  const langLabel = document.getElementById('lang-label');

  function changeLanguage(lang) {
      const elementsToTranslate = document.querySelectorAll('[data-i18n]');
      
      elementsToTranslate.forEach(element => {
          const key = element.getAttribute('data-i18n');
          if (translations[lang] && translations[lang][key]) {
              element.textContent = translations[lang][key];
          }
      });

      langLabel.textContent = lang === 'pt' ? 'EN' : 'PT';

      localStorage.setItem('preferred-lang', lang);
  }
  const savedLang = localStorage.getItem('preferred-lang') || 'pt';
  changeLanguage(savedLang);

  langToggleBtn.addEventListener('click', () => {
      const currentLang = localStorage.getItem('preferred-lang') || 'pt';
      const newLang = currentLang === 'pt' ? 'en' : 'pt';
      changeLanguage(newLang);
  });
});
