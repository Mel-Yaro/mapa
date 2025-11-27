const paralelas = document.querySelectorAll('.imagenes-paralelas img');
const cajas = document.querySelectorAll('.caja-superior, .caja-inferior');

function activarDesvanecimiento(imagenes) {
imagenes.forEach((img, i) => {
setTimeout(() => {
img.style.opacity = 1;
}, i * 200);
});
}

function animacionInfinita(imagenes) {
imagenes.forEach((img, i) => {
let delay = i * 300;
setInterval(() => {
img.style.opacity = img.style.opacity == 1 ? 0.3 : 1;
}, 1200 + delay);
});
}
function estaCerca(e, elemento) {
const rect = elemento.getBoundingClientRect();
const distanciaX = Math.abs(e.clientX - (rect.left + rect.width / 2));
const distanciaY = Math.abs(e.clientY - (rect.top + rect.height / 2));
return distanciaX < 200 && distanciaY < 200; // rango de activación
}


let animacionParalelasActiva = false;


document.addEventListener('mousemove', (e) => {



if (!animacionParalelasActiva && cajas[0] && estaCerca(e, cajas[0])) {
activarDesvanecimiento(paralelas);
animacionInfinita(paralelas);
animacionParalelasActiva = true;
}
});


const btnInicio = document.getElementById('btn-inicio');
const btnColecciones = document.getElementById('btn-colecciones');


btnInicio.addEventListener("click", (e) => {
e.stopPropagation();
window.location.href = 'index.html';
});


btnColecciones.addEventListener("click", (e) => {
e.stopPropagation();
window.location.href = "coleccion.html";
});

document.addEventListener("click", () => {
window.location.href = "antes.html";
});