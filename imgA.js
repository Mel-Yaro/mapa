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
    "0",
  "Tanque para las vacas, se tapa con lodo y queda de camino a la  gloria",
  "Manguera en medio del cambio, se la traga la tierra",
  "Manguera larga que se sumerge en el barro humedo, el único rastro que deja es la misma dirección del camino",
  "manguera que cuelga en la maleza, cargada de agua se trepa por la montaña",
    "Mangueras que cuelgan, delimitan el camino uniendo dos puntos de tierra.",
"Tanque de piedra. Corta la quebrada como una represa, por ese hueco no pasa agua.",
"Caja de agua. A la orilla de la quebrada no sé salva de la humedad. La tiene dentro, el musgo lo sabe.",
"Arterias que son puentes, de un líquido que construyó su propio camino",
"Tanque que emerge de las piedras de la quebrada. ",
"Casa del agua.",
"Casita del agua.",
"Musgo que asfixia una arteria.",
"Arco de la dominación del agua.",
"Punto más alto alcanzado buscando el nacimiento del agua. Quebrada artificial.",
"Transporte aéreo acuático.",
"Manguera enredadera.",
"Cable de agua baja a la siguiente finca.",
"Bebedero para las vacas.",
"Manguera para calentar el agua con la cual bañarse en los días soleados.",
"Manguera para el lavadero.",
"Manguera loma abajo",
"Mangueras transitan por una travesía.",
"¿Es para el agua o es para la comida del toro?",
"Tanque para las vacas, vecinos del maíz y los frijoles.",
"Gran tanque de los vecinos",
"Lavadero de una ruina.",
];

const imagenes = [
  "0",
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
