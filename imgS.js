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
  "Vigas para la ruina del difunto Manuel.",
"Ambuleto. Señal del vacío de la ruina.",
"Banca para los ausentes.",
"Tendedero de contenedores.",
"Cajón boca arriba.",
"Agua para terneros que ya no están.",
"Red para pescar hojarasca.",
"Refugio para el acero.",
"Mochila con potencial de llenarse.",
"Nido.",
"Plato para sal.",
"Sal para los terneros ausentes.",
"Ambuleto para juego.",
"Altar para el nacimiento.",
"Mesa para los terneros ausentes.",
"Zapatos para los visitantes.",
];

const imagenes = [
  "../mapa/archivos/fotos/guardar/soporte.jpg",
  "../mapa/archivos/fotos/guardar/soporte1.jpg",
  "../mapa/archivos/fotos/guardar/soporte2.jpg",
  "../mapa/archivos/fotos/guardar/soporte3.jpg",
  "../mapa/archivos/fotos/guardar/soporte4.jpg",
  "../mapa/archivos/fotos/guardar/soporte5.jpg",
  "../mapa/archivos/fotos/guardar/soporte6.jpg",
  "../mapa/archivos/fotos/guardar/soporte7.jpg",
  "../mapa/archivos/fotos/guardar/soporte8.jpg",
  "../mapa/archivos/fotos/guardar/soporte9.jpg",
  "../mapa/archivos/fotos/guardar/soporte10.jpg",
  "../mapa/archivos/fotos/guardar/soporte11.jpg",
  "../mapa/archivos/fotos/guardar/soporte12.jpg",
  "../mapa/archivos/fotos/guardar/soporte13.jpg",
  "../mapa/archivos/fotos/guardar/soporte14.jpg",
  "../mapa/archivos/fotos/guardar/soporte15.jpg",
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