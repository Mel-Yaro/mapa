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
  "Listas para alimentar a fuego lento.",
"Detrás de la casa.",
"Para despejar el jardín.",
"Para acabar con el jardín.",
"Sin ramas y blandas.",
"Marchitadas.",
    "Debiles.",
    "Secas y rectas.",
    "Pocas.",
    "Perdidas",
    "Horizontales.",
    "Verticales.",
    "Juntas.",
    "Gruesas.",
    "Desordenadas.",
    "Ordenadas.",
    "Dispersadas.",
    "Almacenadas.",
    "Cadavericas."
];

const imagenes = [
  "mapa/archivos/fotos/marañas/rama.jpg",
  "mapa/archivos/fotos/marañas/rama1.jpg",
  "mapa/archivos/fotos/marañas/rama2.jpg",
  "mapa/archivos/fotos/marañas/rama3.jpg",
  "mapa/archivos/fotos/marañas/rama4.jpg",
  "mapa/archivos/fotos/marañas/rama5.jpg",
  "mapa/archivos/fotos/marañas/rama6.jpg",
  "mapa/archivos/fotos/marañas/rama7.jpg",
  "mapa/archivos/fotos/marañas/rama8.jpg",
  "mapa/archivos/fotos/marañas/rama9.jpg",
  "mapa/archivos/fotos/marañas/rama10.jpg",
  "mapa/archivos/fotos/marañas/rama11.jpg",
  "mapa/archivos/fotos/marañas/rama12.jpg",
  "mapa/archivos/fotos/marañas/rama13.jpg",
  "mapa/archivos/fotos/marañas/rama14.jpg",
  "mapa/archivos/fotos/marañas/rama15.jpg",
  "mapa/archivos/fotos/marañas/rama16.jpg",
  "mapa/archivos/fotos/marañas/rama17.jpg",
  "mapa/archivos/fotos/marañas/rama18.jpg",

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