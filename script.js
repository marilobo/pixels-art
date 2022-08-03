//Quero imprimir quadrados 5x5 em divs dentro do #pixel-board;
const quadradoPixels = document.getElementById('pixel-board');

for (let index = 1; index < 6; index += 1) {
  let criaSection = document.createElement('section');
  quadradoPixels.appendChild(criaSection);
  for (let i = 0; i < 5; i += 1) {
    let colunaDiv = document.createElement('div');
    colunaDiv.className = 'pixel';
    let sectionPai = document.getElementsByTagName('section')[index];
    sectionPai.appendChild(colunaDiv);
  }
}
