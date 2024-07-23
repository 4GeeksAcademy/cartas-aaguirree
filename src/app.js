/* eslint-disable */
import "./style.css";

function actionChange() {
  let number = [
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
  let indexNumb = Math.floor(Math.random() * number.length);
  return number[indexNumb];
}

function randomSimbol() {
  let simbol = ["spades", "diamons", "hearts", "clubs"];
  let indexSimbol = Math.floor(Math.random() * simbol.length);
  return simbol[indexSimbol];
}
let boton = document.getElementById("generador");
boton.addEventListener("click", botonGenerar);

window.onload = () => {
  //document.querySelector(".carta").classList.add(randomSimbol());
  document.getElementById("number").innerHTML = actionChange();
};

function botonGenerar() {
  document.getElementById("number").innerHTML = actionChange();
}
