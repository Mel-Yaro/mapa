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

document.addEventListener("click", (e) => {
e.stopPropagation();
window.location.href = "mapa.html";
});

const titulo = document.getElementById("nombre");
const titulo1 = document.getElementById("nombre1");
const imagen = document.getElementById("imagen");

const titulos = [
  "No es una huella es un hito.",
"Yo.",
"Abriendo el camino.",
"Desconocido.",
"Pisada de una roca.",
"Roca sobre tierra.",
"Perro.",
"Avalancha.",
"Ternero.",
  
];

const imagenes = [
  "mapa/archivos/fotos/huellas/huella.jpg",
  "mapa/archivos/fotos/huellas/huella1.jpg",
  "mapa/archivos/fotos/huellas/huella2.jpg",
  "mapa/archivos/fotos/huellas/huella3.jpg",
  "mapa/archivos/fotos/huellas/huella4.jpg",
  "mapa/archivos/fotos/huellas/huella5.jpg",
  "mapa/archivos/fotos/huellas/huella6.jpg",
  "mapa/archivos/fotos/huellas/huella7.jpg",
  "mapa/archivos/fotos/huellas/huella8.jpg",
];

const parametros = new URLSearchParams(window.location.search);
const id = parseInt(parametros.get("id"));

if (!isNaN(id) && titulos[id] && imagenes[id]) {
    titulo.textContent = titulos[id];
    titulo1.textContent = titulos[id];
    imagen.src = imagenes[id];
} else {
    titulo.textContent = "Contenido no encontrado";
    titulo1.textContent = "Contenido no encontrado";
    imagen.alt = "Imagen no disponible";
}