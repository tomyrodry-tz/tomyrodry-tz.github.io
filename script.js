// Animacion Burbujas - Aparecen en un lugar random

const burbujas = document.getElementsByClassName("Burbujas");
const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);

for (let i = 0; i < burbujas.length; i++) { //Empieza en una ubicacion random 
    burbujas[i].style.left= getRandom(0, 20 - 10)+'%'; 
    burbujas[i].style.top = getRandom(0, 750 - 100)+'px'; 
}

setInterval(() => {   // Hacemos que cada 3s le de una ubicacion random          

    for (let i = 0; i < burbujas.length; i++) {
        burbujas[i].style.left= getRandom(0, 20 - 10)+'%'; 
        burbujas[i].style.top = getRandom(0, 750 - 100)+'px'; 
    }
    
}, 2000); // Tiempo en milisegundos


// Animacion Carta de Habilidades - Aparecen visibles

const hab = document.getElementById("habilidades");
const cf = document.getElementById("cf");
const cb = document.getElementById("cb");
const ce = document.getElementById("ce");
const dist = hab.offsetTop;

function runningAnimation() {
    if (window.pageYOffset >= dist-500) {
        cf.style.animationPlayState = "running";
        cb.style.animationPlayState = "running";
        ce.style.animationPlayState = "running";
    }
}

// Animacion Experiencia - Slides 

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {

  let i;
  let slides = document.getElementsByClassName("cartas-trabajos");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1
  }    
  if (n < 1) {
    slideIndex = slides.length
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }  

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";

}