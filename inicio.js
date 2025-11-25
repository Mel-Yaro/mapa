const boton = document.getElementById("boton-secreto");


document.addEventListener("mousemove", (e) => {
const distanciaX = window.innerWidth - e.clientX;
const distanciaY = e.clientY;


if (distanciaX < 150 && distanciaY < 150) {
boton.style.opacity = 1;
} else {
boton.style.opacity = 0;
}
});



document.addEventListener("click", () => {
window.location.href = "intro.html";
});





boton.addEventListener("click", (e) => {
e.stopPropagation();
window.location.href = "coleccion.html";
});