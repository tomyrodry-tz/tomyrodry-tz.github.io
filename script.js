// Animacion Burbujas

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
    
}, 3000); // Tiempo en milisegundos

