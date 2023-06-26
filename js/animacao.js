let x1 = 40; let y1 = 130; let x2 = 40; let y2 = 160;

// Animação 2
function openLine(line, x1, x2, y1, y2, scrol1, p){
   
  const lineM = document.getElementById(line)

  let x_1 = x1; 
  let x_2 = x2;
  let y_1 = y1;
  let y_2 = y2;

  // Atualiza as coordenadas
  y_1 += (scrollY - scrol1);
  y_2 += (scrollY - scrol1);

  if(y_1 >= p) {
    y_1 = p 
    x_1 += -((scrollY - scrol1) * 1.45);
    // console.log('scrol: ',scrollY, 'scroll: ',  scrol1)
  }
    
  if(y_2 >= p) y_2 = p;

  // Atualiza os atributos da linha
  lineM.setAttribute('y1', y_1);
  lineM.setAttribute('y2', y_2);
  lineM.setAttribute('x1', x_1);
  lineM.setAttribute('x2', x_2);  

  // Verifica se a animação chegou ao fim  
}
openLineLeft = (line) =>{
  const linea = document.querySelector(line)
  linea.style.display = 'block'
}
closeLine = (line) => {
  const linea = document.querySelector(line)
  linea.style.display = 'none'
}

const animacao = document.getElementById('animacao')
let svg = animacao.firstElementChild

// Animação
window.addEventListener('scroll', () => {
  if(scrollY > 20 ){
    openLine("line1", 130, 130, 130, 160, 20, 250);
  }
  if(scrollY > 50){
    openLine("line2", 160, 160, 105, 160, 50, 277);
  }
  if(scrollY > 80){
    openLine("line3", 190, 190, 80, 160, 80, 305);
  }
  if(scrollY > 110){
    openLine("line4", 220, 220, 100, 160, 110, 335);
  }
  if(scrollY > 140){
    openLine("line5", 250, 250, 100, 160, 140, 365);
    openLineLeft('#linea1')
  }
  if(scrollY < 140)closeLine('#linea1');

  if(scrollY > 220) openLineLeft('#linea2');
  if(scrollY < 220) closeLine('#linea2');

  if(scrollY > 305) openLineLeft('#linea3');
  if(scrollY < 305) closeLine('#linea3');

  if(scrollY > 345) openLineLeft('#linea4');
  if(scrollY < 345) closeLine('#linea4');

  if(scrollY > 405) openLineLeft('#linea5');
  if(scrollY < 405) closeLine('#linea5');
})

// para atualizar a largura da animação
window.addEventListener('scroll', () => {
  let y = animacao.offsetWidth
  svg.setAttribute('width', y)
})

const elements = ['.C', '.E', '.P', '.T', '.O'];
const intervals = [100, 100, 100, 100, 100];
const texts = ['Confiabilidade', 'Expertise', 'Personalização', 'Transparência', 'Orientação'];
let executed = [false, false, false, false, false];

function showQualidades(el, text, interval) {
  const elemento = document.querySelector(el);
  const char = text.split('').reverse();

  const typer = setInterval(() => {
    if (!char.length) {
      return clearInterval(typer);
    }

    const next = char.pop();
    elemento.innerHTML += next;
  }, interval);
}

function handleScroll() {
  const scrollPositions = [140, 220, 305, 345, 405];

  for (let i = 0; i < scrollPositions.length; i++) {
    if (!executed[i] && window.scrollY > scrollPositions[i]) {
      showQualidades(elements[i], texts[i], intervals[i]);
      executed[i] = true;
    }
  }
}
window.addEventListener('scroll', handleScroll);
