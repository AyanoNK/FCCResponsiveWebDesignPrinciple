//querySelector da el primer elemento que concuerda en la hoja de estilos
const checkbox = document.querySelector('.checkbox');

//si encuentra 'prefers-color-scheme: dark'
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  //pasa la constante checkbox a true
    checkbox.setAttribute('checked', true);
}

//eventlistener para reconocer cambios
//se usa change y no click porque es un slider
checkbox.addEventListener('change', function (event) {
  if (this.checked) {
    document.body.classList.remove('is-light-mode')
    document.body.classList.add('is-dark-mode')
  } else {
    document.body.classList.remove('is-dark-mode')
    document.body.classList.add('is-light-mode')
  }
});