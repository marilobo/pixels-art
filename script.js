const quadradoPixels = document.getElementById('pixel-board');
let corPreta = document.getElementById('black');
let classSelected = document.get

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


