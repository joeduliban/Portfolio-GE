# Portfolio Gestion Entrepreunaria

## Description des Fichiers

### CSS

#### `main.css`
- Variables CSS (couleurs, polices)
- Reset CSS et styles de base
- Sélecteur de langue
- Animations globales

#### `header.css`
- Styles du header
- Photo de profil avec effet flip
- Informations de contact
- Section langues

#### `navigation.css`
- Menu de navigation desktop
- Menu mobile hamburger
- Animations du menu
- States actifs

#### `sections.css`
- Cards et sections de contenu
- Timeline des études/expérience
- Grilles de compétences
- Stats et highlight boxes
- Footer

#### `projects.css`
- Cards de projets
- Layout media/description
- Tags de technologies
- Lightbox pour images
- Vidéos YouTube intégrées

#### `responsive.css`
- Media queries pour mobile
- Adaptations tablette
- Layout responsive

### JavaScript

#### `main.js`
```javascript
// Point d'entrée de l'application
// - Initialisation au chargement
// - Observer pour animations scroll
// - Chargement des projets
```

#### `navigation.js`
```javascript
// Gestion de la navigation
// - Changement de section
// - Menu mobile toggle
// - Fermeture au clic extérieur
```

#### `profile.js`
```javascript
// Animation du profil
// - Flip au survol (desktop)
// - Flip au swipe (mobile)
```

#### `projects.js`
```javascript
// Gestion des projets
// - Chargement des vidéos YouTube
// - Chargement des images
// - Lightbox pour agrandir les images
```

#### `i18n.js`
```javascript
// Internationalisation
// - Changement de langue (FR/EN)
// - Mise à jour du contenu
// - Gestion des traductions imbriquées
```

#### `translations.js`
```javascript
// Données de traduction
// - Objet translations avec toutes les langues
// - Structure : { fr: {...}, en: {...}}
```