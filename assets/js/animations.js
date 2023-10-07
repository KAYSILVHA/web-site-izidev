// Usando JavaScript puro para acionar a animação quando a página é rolada
window.addEventListener('scroll', function() {
  var element = document.querySelector('.animated-element');
  var elementPosition = element.getBoundingClientRect().top;

  // Verifique se o elemento está visível na tela
  if (elementPosition < window.innerHeight) {
    element.classList.add('active');
  }
});