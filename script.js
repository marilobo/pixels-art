const quadradoPixels = document.getElementById('pixel-board');
const cor1 = document.getElementById('black');
cor1.classList.add('selected');
const cor2 = document.getElementById('lavender');
const cor3 = document.getElementById('violet');
const cor4 = document.getElementById('lumber');
const input = document.getElementById('board-size');
const botaoVQV = document.getElementById('generate-board');
let n = 5;

function seccionar() {
  const criaSection = document.createElement('section');
  criaSection.className = 'blocosPx';
  quadradoPixels.appendChild(criaSection);
}

// gera blocos de pixel
function criaBlocos(numberOfPixels) {
  for (let index = 0; index < numberOfPixels; index += 1) {
    seccionar();

    for (let i = 0; i < numberOfPixels; i += 1) {
      const colunaDiv = document.createElement('div');
      colunaDiv.className = 'pixel';
      const sectionPai = document.getElementsByTagName('section')[index];
      sectionPai.appendChild(colunaDiv);
    }
  }
}
criaBlocos(n);

function descriaBlocos() {
  while (quadradoPixels.hasChildNodes()) {
    quadradoPixels.removeChild(quadradoPixels.firstChild);
  }
}

function pixelSize() {
  descriaBlocos();
  req11();
  n = input.value;
  criaBlocos(n);
  colorChange();
}

botaoVQV.addEventListener('click', pixelSize);

//Define apenas uma cor da paleta para ter a classe selected
function trocaSelect(evento) {
  const elemSelected = document.querySelector('.selected');
  elemSelected.classList.remove('selected');
  evento.target.classList.add('selected');
}

cor1.addEventListener('click', trocaSelect);
cor2.addEventListener('click', trocaSelect);
cor3.addEventListener('click', trocaSelect);
cor4.addEventListener('click', trocaSelect);

// Permite pintar os pixels com as cores da paleta
let guardaPixel = document.getElementsByClassName('pixel');

function trocaCor(parametro) {
  const selectedElem = document.querySelector('.selected');
  const idColor = selectedElem.id;
  parametro.target.id = idColor;
}

function colorChange() {
  guardaPixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < guardaPixel.length; index += 1) {
    guardaPixel[index].addEventListener('click', trocaCor);
  }
}
colorChange();

// Implementa o botão de limpar
const guardaBotao = document.getElementById('clear-board');

function limpar() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].id = 'clear';
  }
}
guardaBotao.addEventListener('click', limpar);

// Limita alterações do board-size
function req11() {
  if (input.value === '') {
    alert('Board inválido!');
  } else if (input.value < 5) {
    input.value = 5;
  } else if (input.value > 50) {
    input.value = 50;
  }
}

//https://www.youtube.com/watch?v=E5qWEY1GVQ0&t=504s
function randomColors() {
  const chars = '0123456789abcdf';
  let color = '#';

  for (let index = 0; index < 6; index += 1) {
    color += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return color;
}
