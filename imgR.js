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
  "Molino.",
  "Ruina cerrada.",
  "No quedó ruina, solo la entrada.",
  "Caída de la gloria.",
    "La gloría.",
    "Casa de Manuel.",
    "Un bebedero.",
    "Saliendo de la vereda.",
    "A mitad de camino.",
    "La gran ruina.",
    "Antes de salir de Onzaga, de bloques de adobe.",
    "Subiendo al paramo."
];

const imagenes = [
  "../mapa/archivos/fotos/ruinas/ruina.jpg",
  "../mapa/archivos/fotos/ruinas/ruina1.jpg",
  "../mapa/archivos/fotos/ruinas/ruina2.jpg",
  "../mapa/archivos/fotos/ruinas/ruina3.jpg",
  "../mapa/archivos/fotos/ruinas/ruina4.jpg",
  "../mapa/archivos/fotos/ruinas/ruina5.jpg",
  "../mapa/archivos/fotos/ruinas/ruina6.jpg",
  "../mapa/archivos/fotos/ruinas/ruina7.jpg",
  "../mapa/archivos/fotos/ruinas/ruina8.jpg",
  "../mapa/archivos/fotos/ruinas/ruina9.jpg",
  "../mapa/archivos/fotos/ruinas/ruina10.jpg",
  "../mapa/archivos/fotos/ruinas/ruina11.jpg",
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