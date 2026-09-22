// SERVICE CARDS - TAP TO REVEAL
if (window.innerWidth <= 768) {
  const serviceCards = document.querySelectorAll('.service-card');
  
  serviceCards.forEach(card => {
    card.addEventListener('click', function(e) {
      if (this.classList.contains('show-overlay')) {
        this.classList.remove('show-overlay');
        this.classList.add('hide-overlay');
        setTimeout(() => this.classList.remove('hide-overlay'), 500);
      } else {
        serviceCards.forEach(c => {
          c.classList.remove('show-overlay');
          c.classList.add('hide-overlay');
          setTimeout(() => c.classList.remove('hide-overlay'), 500);
        });
        this.classList.add('show-overlay');
      }
    });
  });
}

// GALERIE 3×3 - TAP TO EXPAND
if (window.innerWidth <= 768) {
  const gallery = document.querySelector('.main');
  
  if (gallery) {
    let isActive = false;
    
    gallery.addEventListener('click', function(e) {
      if (e.target === gallery || e.target.closest('.main-image-container')) {
        isActive = !isActive;
        this.classList.toggle('active', isActive);
      }
    });
  }
}

// PRÉVENTION DOUBLE TAP ZOOM
let lastTouchEnd = 0;
document.addEventListener('touchend', function(e) {
  const now = Date.now();
  if (now - lastTouchEnd <= 300) {
    e.preventDefault();
  }
  lastTouchEnd = now;
}, false);


// À ajouter dans votre script principal
document.addEventListener('DOMContentLoaded', function() {
  // Ajoute lazy loading à toutes les images
  document.querySelectorAll('img:not([loading])').forEach(img => {
    img.setAttribute('loading', 'lazy');
  });
});
