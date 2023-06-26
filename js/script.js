
// muda estilo do cabeçalho quando mexer o scrool
window.addEventListener('scroll', () => {
  let header = document.querySelector('header')
  let logo = document.querySelector('#logo')
  if(scrollY > 0){
    header.classList.remove('header0'); logo.classList.remove('logo0');
    header.classList.add('header1');    logo.classList.add('logo1')
  }else{
    header.classList.remove('header1'); logo.classList.remove('logo1');
    header.classList.add('header0');    logo.classList.add('logo0')
  }
})