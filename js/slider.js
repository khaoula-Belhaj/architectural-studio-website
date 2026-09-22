/*.......HERO.......*/
const track = document.querySelector('.hero-track');
const cards = document.querySelectorAll('.slide-card');
const prevBtn = document.querySelector('.prev-slide');
const nextBtn = document.querySelector('.next-slide');


let autoTimer;


function nextSlide() {
  track.appendChild(track.firstElementChild);
  updateActive();
}

function prevSlide() {
  track.prepend(track.lastElementChild);
  updateActive();
}

function updateActive() {
  cards.forEach(card => card.removeAttribute('data-active'));
  track.firstElementChild.setAttribute('data-active', 'true');
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Auto toutes les 5 secondes + reset timer au clic
function startAuto() {
  clearInterval(autoTimer);
  autoTimer = setInterval(nextSlide, 5000);
}


startAuto();

// Animation d'apparition au scroll (optionnel)
document.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('.footer');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  }, observerOptions);

  if (footer) {
    footerObserver.observe(footer);
  }
});



  // ═══════════════════════════════════════════════════════════════════
// AGENCE.JS — KHAM STUDIO DESIGN
// Animations au scroll pour une expérience narrative fluide
// ═══════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  
  // ═══════════════════════════════════════════════════════════════════
  // INTERSECTION OBSERVER — Révélation progressive des sections
  // ═══════════════════════════════════════════════════════════════════
  
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Manifeste fragmenté
  const fragments = document.querySelectorAll('.fragment');
  fragments.forEach((fragment, index) => {
    fragment.style.transitionDelay = `${index * 0.3}s`;
    observer.observe(fragment);
  });

  // Vision — Révélation image + texte
  const imageReveal = document.querySelector('.image-reveal');
  const visionText = document.querySelector('.vision-text');
  
  if (imageReveal) {
    const visionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            imageReveal.classList.add('revealed');
          }, 200);
          setTimeout(() => {
            visionText?.classList.add('visible');
          }, 800);
        }
      });
    }, { threshold: 0.3 });
    
    visionObserver.observe(imageReveal);
  }

  // Expertise cards
  const expertiseCards = document.querySelectorAll('.expertise-card');
  expertiseCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
    observer.observe(card);
  });

  // Approche — Phases
  const approachIntro = document.querySelector('.approach-intro');
  if (approachIntro) observer.observe(approachIntro);

  const phases = document.querySelectorAll('.phase');
  phases.forEach((phase, index) => {
    phase.style.transitionDelay = `${index * 0.2}s`;
    observer.observe(phase);
  });

  // Présence
  const presenceIntro = document.querySelector('.presence-intro');
  if (presenceIntro) observer.observe(presenceIntro);

  const mosaicItems = document.querySelectorAll('.mosaic-item');
  mosaicItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.15}s`;
    observer.observe(item);
  });

  // Valeurs
  const valueItems = document.querySelectorAll('.value-item');
  valueItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.2}s`;
    observer.observe(item);
  });

  // Closure
  const closureTexts = document.querySelectorAll('.closure-text');
  closureTexts.forEach((text, index) => {
    text.style.transitionDelay = `${index * 0.4}s`;
    observer.observe(text);
  });

  // ═══════════════════════════════════════════════════════════════════
  // SMOOTH SCROLL pour les ancres (si nécessaire)
  // ═══════════════════════════════════════════════════════════════════
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // ═══════════════════════════════════════════════════════════════════
  // PARALLAX SUBTIL sur les images (optionnel)
  // ═══════════════════════════════════════════════════════════════════
  
  const parallaxImages = document.querySelectorAll('.vision-image, .card-image');
  
  if (parallaxImages.length > 0) {
    let ticking = false;
    
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          parallaxImages.forEach(img => {
            const rect = img.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isVisible) {
              const scrolled = window.pageYOffset;
              const rate = scrolled * 0.05;
              img.style.transform = `translateY(${rate}px)`;
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    });
  }

});

// ═══════════════════════════════════════════════════════════════════
// MENU BURGER (si nécessaire pour mobile)
// ═══════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');

  if (!burger || !navLinks) return;

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
});

// Animation d'apparition au scroll (optionnel)
document.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('.footer');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  }, observerOptions);

  if (footer) {
    footerObserver.observe(footer);
  }
});

// À ajouter dans votre script principal
document.addEventListener('DOMContentLoaded', function() {
  // Ajoute lazy loading à toutes les images
  document.querySelectorAll('img:not([loading])').forEach(img => {
    img.setAttribute('loading', 'lazy');
  });
});

