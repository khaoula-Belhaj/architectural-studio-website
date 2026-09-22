/* ═══════════════════════════════════════════════════════════════════
   BASE DE DONNÉES DES PROJETS KHAM STUDIO
   
   Structure pour chaque projet :
   - id: identifiant unique (correspond au data-project)
   - title: nom du projet
   - category: catégorie (Résidentiel, Commercial, etc.)
   - location: ville/pays
   - year: année de réalisation
   - type: type de projet
   - surface: surface en m² (optionnel)
   - mission: type de mission (optionnel)
   - descriptionTitle: titre de la description longue
   - description: tableau de paragraphes pour la description
   - heroImage: image principale (hero)
   - gallery: tableau des images de la galerie
═══════════════════════════════════════════════════════════════════ */

const projectsData = [
  {
    id: 1,
    title: "Résidence Californie",
    category: "Architecture Résidentielle",
    location: "Meknès, Maroc",
    year: "2025",
    type: "Résidentiel",
    mission: "Design d'intérieur",
    descriptionTitle: "Un Emplacement De Choix Dans La Ville De Meknès",
    description: [
    "Située sur l’Avenue Assaadiyenne à Meknès, la résidence comprend un sous-sol, un rez-de-chaussée avec mezzanine et 4 étages, offrant 131 appartements, 29 commerces, des espaces verts et un parking en sous-sol.", 
    "Le projet présente une finition de standing moyen, des circulations optimisées, des espaces communs confortables et des zones techniques intégrées, à proximité des écoles, commerces et transports."
  ],
    heroImage: "images/plan/1.png",
    gallery: [
      "images/salon/26.jpeg",
      "images/salon/117.png",
      "images/chambre/121.png",
      "images/chambre/12.jpeg",
      "images/cuisine/1.png",
      "images/cuisine/2.png",
      "images/douche/115.png",
      "images/douche/116.png",
      "images/chambre/4.png"
    ]
  },
  
  {
    id: 2,
    title: "Société de Construction & Développement Immobilier",
    category: "Construction & Architecture Résidentielle",
    location: "Maroc",
    year: "Depuis 1990",
    type: "Projets Économiques, Moyen & Haut Standing",
    mission: "Construction, conception architecturale et suivi de projets résidentiels",
    descriptionTitle: "Des Projets Résidentiels Accessibles et Durables au Maroc",
    description: [
      "Notre société de construction est spécialisée dans la réalisation de projets immobiliers économiques, moyen et haut standing, incluant des villas et des résidences modernes. Présents à Tanger, Rabat, Meknès, Larache, Casablanca et Marrakech, nous développons des projets alliant qualité de construction, optimisation des coûts et respect des délais. Notre approche met l’accent sur des espaces fonctionnels, des matériaux durables et un design adapté aux besoins des familles, tout en garantissant un excellent rapport qualité-prix."],
    heroImage: "images/chantier/13.jpg",
    gallery: [
      "images/chantier/12.jpg",
      "images/chantier/16.jpeg",
      "images/chantier/14.jpg",
      "images/chantier/11.jpeg",
      "images/chantier/17.jpeg",
      "images/chantier/18.jpeg"
    ]
  },

  {
    id: 3,
    title: "Café Restaurant",
    category: "Architecture Commerciale",
    location: "Tanger, Maroc",
    year: "2023",
    type: "Restauration / Commercial",
    mission: "Visualisation 3D, Design d'intérieur, Conception architecturale",
    descriptionTitle: "L'Arche Moderne : Fusion du Luxe et de la Convivialité",
    description: [
      "Conception 3D d’un café-restaurant moderne situé à Tanger, pensée pour offrir une expérience chaleureuse et conviviale.",
      "Le design associe des matériaux nobles, des textures raffinées et un éclairage étudié afin de créer une ambiance à la fois contemporaine et accueillante.",
      "Chaque détail a été soigneusement travaillé pour optimiser les espaces, valoriser l’identité du lieu et projeter une vision réaliste du projet avant sa réalisation."
    ],
    heroImage: "images/cafe/4.png",
    gallery: [
      "images/cafe/9.png",
      "images/cafe/8.png",
      "images/cafe/2.png",
      "images/cafe/3.jpeg"
    ]
  },

  {
    id: 4,
    title: "Résidence Côtière",
    category: "Architecture Résidentielle de Luxe",
    location: "Casablanca, Maroc",
    year: "2025",
    type: "Résidentiel",
    mission: "Architecture, Design d'intérieur, Paysagisme",
    descriptionTitle: "Face à l'océan, une architecture qui capture l'horizon",
    description: [
    "Implantée sur le littoral de Casablanca, la Résidence Côtière s'affirme par une volumétrie cubique épurée." ,
   "Sa façade, alternant blanc immaculé et bardage en bois chaleureux, joue sur les pleins et les vides pour créer un rythme visuel dynamique." ,
    "Les larges ouvertures vitrées transforment le paysage extérieur en un tableau vivant, fusionnant l'intérieur avec l'horizon marin.",
    
    "   L'intérieur rompt avec la linéarité extérieure pour introduire un langage plus organique :",
    "- Espaces de vie :","Un design sculptural où le mobilier aux motifs éthniques rencontre des miroirs aux formes libres.",
    "- Suites Privées :","Utilisation de matériaux tactiles comme la bouclétte et le laiton pour créer un sanctuaire de sérénité."

  ],
    heroImage: "images/villa/5.jpeg",
    gallery: [
      "images/salon/11.png",
      "images/chambre/15.jpeg",
      "images/chambre/17.jpeg",
      "images/chambre/20.png",
      "images/chambre/21.png",
      "images/chambre/dres.png",
      "images/cuisine/3.png",
      "images/modern/1.png",
      "images/modern/8.jpeg",
      "images/salon/12.png"
    ]
  },

  {
    id: 5,
    title: "Résidence IKHWA",
    category: "Design d'Intérieur Résidentiel",
    location: "Meknès, Maroc",
    year: "2025",
    type: "Résidentiel",
    mission: "Design d'intérieur & Aménagement global",
    descriptionTitle: "L'Art de Sublimer l'Espace : Modernité et Confort à Toulal",
    description: [
    "Réinventer le Volume Urbain Dans le cadre de la Résidence IKHWA, mon intervention en tant qu'architecte d'intérieur a consisté à transformer des plateaux de 110 m² en véritables havres de paix contemporains. L'objectif était de créer une rupture douce avec l'architecture extérieure pour offrir une expérience résidentielle axée sur le raffinement et la sérénité.",
    "Un Design Sensoriel et Organique:","L'aménagement des pièces de vie privilégie la fluidité. Le salon se distingue par l'utilisation de matériaux tactiles : des murs en travertin aux rainures délicates, des miroirs aux formes libres qui démultiplient la lumière, et un mobilier aux lignes courbes qui invite à la détente. Chaque détail a été pensé pour effacer les angles droits et apporter une sensation de bien-être immédiat.",
    "L'Excellence des Matières: "," Le projet repose sur une sélection rigoureuse de finitions nobles. Dans les suites, le dialogue entre le textile bouclé des têtes de lit sculpturales et la brillance du laiton brossé crée un luxe discret. Le bois strié, utilisé pour les rangements et les parois, apporte une verticalité élégante tout en réchauffant l'atmosphère.",
    "Une Signature Lumineuse: ","Une attention particulière a été portée à l'éclairage architectural. En jouant sur des sources indirectes et des luminaires suspendus au design affirmé, les appartements de la Résidence IKHWA révèlent une identité différente à chaque moment de la journée, soulignant les textures et valorisant les volumes créés."
  ],
    heroImage: "images/villa/uyyg.jpeg",
    gallery: [
      "images/plan/saad1.png",
      "images/plan/saad2.png",
      "images/plan/saad3.png",
      "images/plan/saad4.png",
      "images/chambre/5.jpeg",
      "images/chambre/55.png",
      "images/douche/1.png",
      "images/chambre/22.png",
      "images/salon/3.png",
      "images/salon/23.jpeg",
      "images/cuisine/4.png"
    ]
  },



  {
    id: 7,
    title: "Clinique Dentaire",
    category: "Design d'Intérieur Médical",
    location: "Casablanca, Maroc",
    year: "2023",
    type: "Santé & Bien-être",
    mission: "Architecture d'intérieur, Concept d'accueil, Scénographie lumineuse",
    descriptionTitle: "L'Apaisement par le Design : Une Nouvelle Vision de l'Espace Médical",
    description: [
    "Réinventer l'Expérience Patient Située au cœur de Casablanca, cette clinique dentaire rompt avec les codes cliniques traditionnels souvent froids. Mon intervention en tant qu'architecte d'intérieur a visé à transformer cet espace en un environnement serein, où le design devient un outil pour réduire l'anxiété du patient. Le concept repose sur une fluidité absolue, symbolisée par des lignes courbes et une palette chromatique douce.",
    "Une Signature Organique L'accueil est structuré par un jeu de vagues lumineuses intégrées au plafond et aux parois murales, créant un mouvement naturel qui guide le visiteur. Le mobilier de réception, aux textures cannelées et aux tons terre cuite, apporte une chaleur domestique contrastant avec la rigueur des sols sombres et élégants.",
    "L'Équilibre entre Fonctionnalité et Esthétique Chaque zone a été optimisée pour répondre aux exigences strictes du milieu médical tout en préservant une identité visuelle forte. Les matériaux, tels que le marbre travertin des tables basses et les textiles bouclés des assises, ont été sélectionnés pour leur noblesse et leur durabilité, prouvant que l'excellence médicale peut parfaitement cohabiter avec une esthétique de pointe."
  ],
    heroImage: "images/cafe/17.jpeg",
    gallery: [
      "images/cafe/11.jpeg",
      "images/cafe/18.jpeg",
      "images/cafe/12.jpeg",
      "images/cafe/13.jpeg",
      "images/cafe/14.jpeg",
      "images/cafe/15.jpeg",
      "images/cafe/16.jpeg"
    ]
  },

 
];

// Export pour utilisation dans project.js
// (En JS natif sans module, la variable est accessible globalement)
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
