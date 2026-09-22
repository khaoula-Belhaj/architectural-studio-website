/* ═══════════════════════════════════════════════════════════════════
   KHAM STUDIO - PROJECT.JS CORRIGÉ
   Watermark qui s'affiche correctement dans la lightbox
═══════════════════════════════════════════════════════════════════ */

// Variables globales pour la lightbox
let currentImageIndex = 0;
let galleryImages = [];

// ═══════════════════════════════════════════════════════════════════
// CONFIGURATION DU WATERMARK
// ═══════════════════════════════════════════════════════════════════
const WATERMARK_CONFIG = {
  logoUrl: 'images/logo-removebg-preview.png', // ⚠️ RETIRÉ le / initial
  size: 200, // Taille augmentée pour être visible
  opacity: 0.4,
  position: 'center', // Position centrée par défaut
  margin: 20
};

// ═══════════════════════════════════════════════════════════════════
// FONCTION : Générer la galerie (avec watermark CSS)
// ═══════════════════════════════════════════════════════════════════
function generateGallery() {
  const gallery = document.getElementById('gallery');
  
  galleryImages.forEach((imagePath, index) => {
    // Extraire la catégorie du chemin
    const category = imagePath.split('/')[1];
    const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
    
    // Créer l'élément de galerie
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.onclick = () => openLightbox(index);
    
    item.innerHTML = `
      <img src="${imagePath}" alt="${categoryName}" loading="lazy">
      <div class="gallery-item-label">${categoryName}</div>
    `;
    
    gallery.appendChild(item);
  });
}

// ═══════════════════════════════════════════════════════════════════
// FONCTION 1 : Récupérer l'ID du projet depuis l'URL
// ═══════════════════════════════════════════════════════════════════
function getProjectIdFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('project');
  return projectId ? parseInt(projectId) : null;
}

// ═══════════════════════════════════════════════════════════════════
// FONCTION 2 : Trouver le projet dans la base de données
// ═══════════════════════════════════════════════════════════════════
function findProject(projectId) {
  return projectsData.find(project => project.id === projectId);
}

// ═══════════════════════════════════════════════════════════════════
// FONCTION 3 : Afficher le projet sur la page
// ═══════════════════════════════════════════════════════════════════
function displayProject(project) {
  // Mettre à jour le titre de la page
  document.getElementById('page-title').textContent = `${project.title} — KHAM Studio Design`;

  // Hero Section
  document.getElementById('heroImage').src = project.heroImage;
  document.getElementById('heroImage').alt = project.title;
  document.getElementById('projectCategory').textContent = project.category;
  document.getElementById('projectTitle').textContent = project.title;
  document.getElementById('projectLocation').textContent = project.location;
  document.getElementById('projectYear').textContent = project.year;
  document.getElementById('projectType').textContent = project.type;

  // Sidebar Details
  document.getElementById('detailLocation').textContent = project.location;
  document.getElementById('detailYear').textContent = project.year;
  document.getElementById('detailType').textContent = project.type;

  // Surface (optionnel)
  if (project.surface) {
    document.getElementById('surfaceSection').style.display = 'block';
    document.getElementById('detailSurface').textContent = project.surface;
  }

  // Mission (optionnel)
  if (project.mission) {
    document.getElementById('missionSection').style.display = 'block';
    document.getElementById('detailMission').textContent = project.mission;
  }

  // Description
  document.getElementById('descriptionTitle').textContent = project.descriptionTitle;
  
  const descriptionContainer = document.getElementById('descriptionContent');
  descriptionContainer.innerHTML = ''; // Vider le contenu
  
  project.description.forEach(paragraph => {
    const p = document.createElement('p');
    p.textContent = paragraph;
    descriptionContainer.appendChild(p);
  });

  // Galerie
  const galleryGrid = document.getElementById('galleryGrid');
  galleryGrid.innerHTML = ''; // Vider la galerie
  galleryImages = project.gallery; // Stocker pour la lightbox

  project.gallery.forEach((imageSrc, index) => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    galleryItem.setAttribute('data-index', index);
    
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = `${project.title} - Photo ${index + 1}`;
    
    galleryItem.appendChild(img);
    galleryGrid.appendChild(galleryItem);

    // Event listener pour ouvrir la lightbox
    galleryItem.addEventListener('click', () => openLightbox(index));
  });
}

// ═══════════════════════════════════════════════════════════════════
// FONCTION : Créer le watermark pour la lightbox
// ═══════════════════════════════════════════════════════════════════
function createWatermark() {
  const watermark = document.createElement('div');
  watermark.id = 'lightboxWatermark';
  watermark.style.cssText = `
    position: absolute;
    width: ${WATERMARK_CONFIG.size}px;
    height: ${WATERMARK_CONFIG.size}px;
    background-image: url('${WATERMARK_CONFIG.logoUrl}');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    opacity: ${WATERMARK_CONFIG.opacity};
    pointer-events: none;
    z-index: 10001;
  `;
  
  // Positionner selon la configuration
  const positions = {
    'top-right': { top: WATERMARK_CONFIG.margin + 'px', right: WATERMARK_CONFIG.margin + 'px' },
    'top-left': { top: WATERMARK_CONFIG.margin + 'px', left: WATERMARK_CONFIG.margin + 'px' },
    'bottom-right': { bottom: WATERMARK_CONFIG.margin + 'px', right: WATERMARK_CONFIG.margin + 'px' },
    'bottom-left': { bottom: WATERMARK_CONFIG.margin + 'px', left: WATERMARK_CONFIG.margin + 'px' },
    'center': { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }
  };
  
  Object.assign(watermark.style, positions[WATERMARK_CONFIG.position]);
  
  return watermark;
}

// ═══════════════════════════════════════════════════════════════════
// FONCTION 4 : Lightbox - Ouvrir (CORRIGÉ)
// ═══════════════════════════════════════════════════════════════════
function openLightbox(index) {
  currentImageIndex = index;
  const lightbox = document.getElementById('lightbox');
  const lightboxContent = document.querySelector('.lightbox-content'); // ✅ CORRIGÉ
  const lightboxImage = document.getElementById('lightboxImage');
  
  lightboxImage.src = galleryImages[currentImageIndex];
  updateLightboxCounter();
  
  // ✅ AJOUTER LE WATERMARK AU LIGHTBOX-CONTENT (pas au lightbox)
  // Supprimer l'ancien watermark s'il existe
  const oldWatermark = document.getElementById('lightboxWatermark');
  if (oldWatermark) {
    oldWatermark.remove();
  }
  
  // Créer et ajouter le nouveau watermark au lightbox-content
  const watermark = createWatermark();
  lightboxContent.appendChild(watermark); // ✅ CORRIGÉ : ajouté à lightbox-content
  
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden'; // Bloquer le scroll
  
  // ✅ DEBUG : Vérifier que le watermark est bien créé
  console.log('Watermark créé:', watermark);
  console.log('Logo URL:', WATERMARK_CONFIG.logoUrl);
  console.log('Watermark ajouté à:', lightboxContent);
}

// ═══════════════════════════════════════════════════════════════════
// FONCTION 5 : Lightbox - Fermer
// ═══════════════════════════════════════════════════════════════════
function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('active');
  document.body.style.overflow = ''; // Restaurer le scroll
  
  // Supprimer le watermark
  const watermark = document.getElementById('lightboxWatermark');
  if (watermark) {
    watermark.remove();
  }
}

// ═══════════════════════════════════════════════════════════════════
// FONCTION 6 : Lightbox - Image suivante
// ═══════════════════════════════════════════════════════════════════
function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
  document.getElementById('lightboxImage').src = galleryImages[currentImageIndex];
  updateLightboxCounter();
}

// ═══════════════════════════════════════════════════════════════════
// FONCTION 7 : Lightbox - Image précédente
// ═══════════════════════════════════════════════════════════════════
function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
  document.getElementById('lightboxImage').src = galleryImages[currentImageIndex];
  updateLightboxCounter();
}

// ═══════════════════════════════════════════════════════════════════
// FONCTION 8 : Lightbox - Mettre à jour le compteur
// ═══════════════════════════════════════════════════════════════════
function updateLightboxCounter() {
  const counter = document.getElementById('lightboxCounter');
  counter.textContent = `${currentImageIndex + 1} / ${galleryImages.length}`;
}

// ═══════════════════════════════════════════════════════════════════
// FONCTION 9 : Gestion des erreurs (projet non trouvé)
// ═══════════════════════════════════════════════════════════════════
function showError() {
  document.getElementById('loading').innerHTML = `
    <div style="text-align: center; padding: 5rem;">
      <h2 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; color: #f5f5f5; margin-bottom: 2rem;">
        Projet introuvable
      </h2>
      <p style="color: #888; margin-bottom: 3rem; font-size: 1.1rem;">
        Le projet demandé n'existe pas ou a été supprimé.
      </p>
      <a href="projets.html" style="display: inline-block; padding: 1.2rem 3rem; background: transparent; border: 1px solid rgba(255,255,255,0.2); color: #f5f5f5; text-decoration: none; letter-spacing: 0.15em; text-transform: uppercase; transition: all 0.3s;">
        ← Retour aux projets
      </a>
    </div>
  `;
}

// ═══════════════════════════════════════════════════════════════════
// INITIALISATION AU CHARGEMENT DE LA PAGE
// ═══════════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Récupérer l'ID du projet depuis l'URL
  const projectId = getProjectIdFromURL();

  // 2. Vérifier si un ID est présent
  if (!projectId) {
    showError();
    return;
  }

  // 3. Trouver le projet dans la base de données
  const project = findProject(projectId);

  // 4. Vérifier si le projet existe
  if (!project) {
    showError();
    return;
  }

  // 5. Afficher le projet
  displayProject(project);

  // 6. Masquer le loading et afficher le contenu
  setTimeout(() => {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('projectDetail').style.display = 'block';
  }, 500); // Petit délai pour une transition douce

  // ═══════════════════════════════════════════════════════════════════
  // EVENT LISTENERS LIGHTBOX
  // ═══════════════════════════════════════════════════════════════════

  // Bouton fermer
  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);

  // Bouton suivant
  document.getElementById('lightboxNext').addEventListener('click', nextImage);

  // Bouton précédent
  document.getElementById('lightboxPrev').addEventListener('click', prevImage);

  // Fermer en cliquant en dehors de l'image
  document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') {
      closeLightbox();
    }
  });

  // Navigation clavier
  document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (lightbox.classList.contains('active')) {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    }
  });

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