// JavaScript pour gérer l'activation du menu hamburger
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
  hamburger.classList.toggle('open'); // Animation du hamburger
});

// Ajout de la classe "scrolled" à la navbar lors du défilement
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Variable pour suivre l'étape actuelle
let currentStep = 0;

function moveStep(direction) {
  const steps = document.querySelectorAll('.step');
  const totalSteps = steps.length;

  // Cacher l'étape actuelle
  steps[currentStep].style.display = 'none';

  // Calculer la nouvelle étape
  currentStep += direction;

  // S'assurer que les étapes sont cycliques (on revient à la première étape après la dernière et vice versa)
  if (currentStep < 0) {
    currentStep = totalSteps - 1; // Si on va en arrière, revenir à la dernière étape
  } else if (currentStep >= totalSteps) {
    currentStep = 0; // Si on va en avant, revenir à la première étape
  }

  // Afficher la nouvelle étape
  steps[currentStep].style.display = 'block';
}

// Initialiser la première étape visible
window.onload = () => {
  const steps = document.querySelectorAll('.step');
  steps.forEach(step => {
    step.style.display = 'none';  // Cacher toutes les étapes
  });
  steps[currentStep].style.display = 'block';  // Afficher la première étape
};
