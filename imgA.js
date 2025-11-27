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
    "Título 9",
    "Título 10",
    "Título 11",
    "Título 12",
    "Título 13",
    "Título 14",
    "Título 15",
    "Tanque de agua, al la",
    "Título 17",
    "Título 18",
    "Título 19",
    "Título 20",
    "Título 21",
    "Título 22",
    "Título 23",
    "Título 24",
    "Título 25",
    "Título 26",
];

const imagenes = [
  "../mapa/archivos/fotos/agua1.jpg",
    "../mapa/archivos/fotos/agua2.jpg",
    "../mapa/archivos/fotos/agua3.jpg",
    "../mapa/archivos/fotos/agua4.jpg",
    "../mapa/archivos/fotos/agua5.jpg",
    "../mapa/archivos/fotos/agua6.jpg",
    "../mapa/archivos/fotos/agua7.jpg",
    "../mapa/archivos/fotos/agua8.jpg",
    "../mapa/archivos/fotos/agua9.jpg",
    "../mapa/archivos/fotos/agua10.jpg",
    "../mapa/archivos/fotos/agua11.jpg",
    "../mapa/archivos/fotos/agua12.jpg",
    "../mapa/archivos/fotos/agua13.jpg",
    "../mapa/archivos/fotos/agua14.jpg",
    "../mapa/archivos/fotos/agua15.jpg",
    "../mapa/archivos/fotos/agua16.jpg",
    "../mapa/archivos/fotos/agua17.jpg",
    "../mapa/archivos/fotos/agua18.jpg",
    "../mapa/archivos/fotos/agua19.jpg",
    "../mapa/archivos/fotos/agua20.jpg",
    "../mapa/archivos/fotos/agua21.jpg",
    "../mapa/archivos/fotos/agua22.jpg",
    "../mapa/archivos/fotos/agua23.jpg",
    "../mapa/archivos/fotos/agua24.jpg",
    "../mapa/archivos/fotos/agua25.jpg",
    "../mapa/archivos/fotos/agua26.jpg",

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
