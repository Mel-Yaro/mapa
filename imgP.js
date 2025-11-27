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
  "Antes de llegar al pueblo. Un camino estendido para llegar a la casa del molino.",
  "Puente caido.",
  "Puente enterrado",
  "Puente para un charco",
    "Para conectar dos lomas.",
    "Puente sin camino",
    "Puente para no embarrarse",
    "Gran puente",
    "Puente para completar el camino",
    "Puente al gallinero",
];

const imagenes = [
  "../mapa/archivos/fotos/puentes/puente.jpg",
  "../mapa/archivos/fotos/puentes/puente1.jpg",
  "../mapa/archivos/fotos/puentes/puente2.jpg",
  "../mapa/archivos/fotos/puentes/puente3.jpg",
  "../mapa/archivos/fotos/puentes/puente4.jpg",
  "../mapa/archivos/fotos/puentes/puente5.jpg",
  "../mapa/archivos/fotos/puentes/puente6.jpg",
  "../mapa/archivos/fotos/puentes/puente7.jpg",
  "../mapa/archivos/fotos/puentes/puente8.jpg",
  "../mapa/archivos/fotos/puentes/puente10.jpg",
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