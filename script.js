const quadradoPixels = document.getElementById('pixel-board');
const cor1 = document.getElementById('black');
cor1.classList.add('selected');
const cor2 = document.getElementById('lavender');
const cor3 = document.getElementById('violet');
const cor4 = document.getElementById('lumber');

for (let index = 1; index < 6; index += 1) {
  let criaSection = document.createElement('section');
  criaSection.className = 'blocosPx';
  quadradoPixels.appendChild(criaSection);
  for (let i = 0; i < 5; i += 1) {
    let colunaDiv = document.createElement('div');
    colunaDiv.className = 'pixel';
    let sectionPai = document.getElementsByTagName('section')[index];
    sectionPai.appendChild(colunaDiv);
  }
}

function trocaSelect(evento) {
    const elemSelected = document.querySelector('.selected');
    elemSelected.classList.remove('selected');
    evento.target.classList.add('selected');
}

cor1.addEventListener('click', trocaSelect);
cor2.addEventListener('click', trocaSelect);
cor3.addEventListener('click', trocaSelect);
cor4.addEventListener('click', trocaSelect);