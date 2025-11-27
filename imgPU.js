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
  "Título 0",
  "Título 1",
  "Título 2",
  "Título 3",
    "Título 4",
    "Título 5",
    "Título 6",
    "Título 7",
    "Título 8",
    "Título 9"
];

const imagenes = [
  "../mapa/archivos/fotos/puertas/puerta.jpg",
  "../mapa/archivos/fotos/puertas/puerta1.jpg",
  "../mapa/archivos/fotos/puertas/puerta2.jpg",
  "../mapa/archivos/fotos/puertas/puerta3.jpg",
  "../mapa/archivos/fotos/puertas/puerta4.jpg",
  "../mapa/archivos/fotos/puertas/puerta5.jpg",
  "../mapa/archivos/fotos/puertas/puerta6.jpg",
  "../mapa/archivos/fotos/puertas/puerta7.jpg",
  "../mapa/archivos/fotos/puertas/puerta8.jpg",
  "../mapa/archivos/fotos/puertas/puerta9.jpg",
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