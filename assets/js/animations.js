function observarElementos(entries, observer) {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('ativo');
      } else {
          entry.target.classList.remove('ativo');
      }
  });
}

const elementosObservados = document.querySelectorAll('.elemento');

const observer = new IntersectionObserver(observarElementos, {
  threshold: 0
});

elementosObservados.forEach((elemento) => {
  observer.observe(elemento);
});

window.addEventListener('load', () => {
  elementosObservados.forEach((elemento) => {
      elemento.classList.remove('ativo');
  });
});