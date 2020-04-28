
let btnElement = document.getElementById('novo');
let quadradoElemento = document.getElementById('quadrados');

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


btnElement.onclick = function () {
  let quadrados = document.createElement('div');
  quadrados.style.width = '100px';
  quadrados.style.height = '100px';
  quadrados.style.backgroundColor = '#f00';
  quadrados.style.marginBottom = '5px';

  quadrados.onmouseover = function () {
    quadrados.style.backgroundColor = getRandomColor();
  }

  quadradoElemento.appendChild(quadrados);
}

let nomes = ["Diego", "Gabriel", "Lucas"];
let listaElement = document.querySelector('ul');
let inputElement = document.querySelector('input')

for (nome of nomes) {
  let liElement = document.createElement('li');
  let textElement = document.createTextNode(nome);
  liElement.appendChild(textElement);
  listaElement.appendChild(liElement);
}

function addItem(texto) {
  let liElement = document.createElement('li');
  let textElement = document.createTextNode(texto);

  liElement.appendChild(textElement);
  listaElement.appendChild(liElement);
}

function adicionar() {
  addItem(inputElement.value);
  inputElement.value = "";
}