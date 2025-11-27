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
    "Título 18"
];

const imagenes = [
  "../mapa/archivos/fotos/marañas/rama.jpg",
  "../mapa/archivos/fotos/marañas/rama1.jpg",
  "../mapa/archivos/fotos/marañas/rama2.jpg",
  "../mapa/archivos/fotos/marañas/rama3.jpg",
  "../mapa/archivos/fotos/marañas/rama4.jpg",
  "../mapa/archivos/fotos/marañas/rama5.jpg",
  "../mapa/archivos/fotos/marañas/rama6.jpg",
  "../mapa/archivos/fotos/marañas/rama7.jpg",
  "../mapa/archivos/fotos/marañas/rama8.jpg",
  "../mapa/archivos/fotos/marañas/rama9.jpg",
  "../mapa/archivos/fotos/marañas/rama10.jpg",
  "../mapa/archivos/fotos/marañas/rama11.jpg",
  "../mapa/archivos/fotos/marañas/rama12.jpg",
  "../mapa/archivos/fotos/marañas/rama13.jpg",
  "../mapa/archivos/fotos/marañas/rama14.jpg",
  "../mapa/archivos/fotos/marañas/rama15.jpg",
  "../mapa/archivos/fotos/marañas/rama16.jpg",
  "../mapa/archivos/fotos/marañas/rama17.jpg",
  "../mapa/archivos/fotos/marañas/rama18.jpg",
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