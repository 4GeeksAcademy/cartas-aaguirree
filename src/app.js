/* eslint-disable */

import "./style.css";

window.onload = function() {
  document.getElementById("generadorButton");
  document.addEventListener("click", generateCard);
  document.getElementById("aplicarDimen");
  document.addEventListener("click", aplicarDimen);
};

function generateCard() {
  const palos = ["spades", "club", "heart", "diamond"];
  const valores = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const simbolos = {
    spades: "♦",
    club: "♠",
    heart: "♥",
    diamond: "♣"
  };

  const paloAleatorio = palos[Math.floor(Math.random() * palos.length)];
  console.log(paloAleatorio);
  const valorAleatorio = valores[Math.floor(Math.random() * valores.length)];
  const card = document.getElementById("carta");

  card.className = `carta ${paloAleatorio}`;
  card.innerHTML = `
  <span class="top-simbol" id="arriba">${simbolos[paloAleatorio]}</span>
        <span class="number" id="number">${valorAleatorio}</span>
        <span class="bottom-simbol" id="abajo">${simbolos[paloAleatorio]}</span>`;
}

//temporizador para crear una nueva carta cada 10s
setInterval(generateCard, 10000);
// función para aplicar los tamños que especifique el usuario

function aplicarDimen() {
  const width = document.getElementById("width").value;
  const heigth = document.getElementById("height").value;
  const cart = document.getElementById("carta");

  if (width && heigth) {
    cart.style.width = width + "px";
    cart.style.height = heigth + "px";
  }
}
generateCard();
