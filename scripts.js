// Animacion Burbujas - Aparecen en un lugar random

const burbujas = document.getElementsByClassName("Burbujas");
const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);

for (let i = 0; i < burbujas.length; i++) { //Empieza en una ubicacion random 
    burbujas[i].style.left= getRandom(0, 20 - 10)+'%'; 
    burbujas[i].style.top = getRandom(0, 750 - 100)+'px'; 
}

setInterval(() => {   // Hacemos que cada ... le de una ubicacion random          

    for (let i = 0; i < burbujas.length; i++) {
        burbujas[i].style.left= getRandom(0, 20 - 10)+'%'; 
        burbujas[i].style.top = getRandom(0, 750 - 100)+'px'; 
    }
    
}, 1500); // Tiempo en milisegundos

// Animacion Experiencia - Popup

function myPopup1() {
  var popup = document.getElementById("popup1");
  popup.classList.toggle("show");
}
function myPopup2() {
  var popup = document.getElementById("popup2");
  popup.classList.toggle("show");
}
function myPopup3() {
  var popup = document.getElementById("popup3");
  popup.classList.toggle("show");
}
function myPopup4() {
  var popup = document.getElementById("popup4");
  popup.classList.toggle("show");
}
function myPopup5() {
  var popup = document.getElementById("popup5");
  popup.classList.toggle("show");
}
function myPopup6() {
  var popup = document.getElementById("popup6");
  popup.classList.toggle("show");
}
function myPopup7() {
  var popup = document.getElementById("popup7");
  popup.classList.toggle("show");
}

// Animacion del menu hamburguesa

function navbarShow() {
  var nb = document.getElementById("navbar");
  nb.classList.toggle("navbarShow");
}