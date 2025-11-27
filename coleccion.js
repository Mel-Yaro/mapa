const btnInicio = document.getElementById('btn-inicio');
const btnMapa = document.getElementById('btn-mapa');


btnInicio.addEventListener("click", (e) => {
e.stopPropagation();
window.location.href = 'index.html';
});


btnMapa.addEventListener("click", (e) => {
e.stopPropagation();
window.location.href = "mapa.html";
});

const titulos = {
  "agua1": "Tanque para las vacas, se tapa con lodo y queda de camino a la  gloria",
  "agua2": "Manguera en medio del cambio, se la traga la tierra",
  "agua3": "Manguera larga que se sumerge en el barro humedo, el único rastro que deja es la misma dirección del camino",
  "agua4": "manguera que cuelga en la maleza, cargada de agua se trepa por la montaña",
  "agua5": "Mangueras que cuelgan, delimitan el camino uniendo dos puntos de tierra.",
  "agua6": "Tanque de piedra. Corta la quebrada como una represa, por ese hueco no pasa agua.",
  "agua7": "Caja de agua. A la orilla de la quebrada no sé salva de la humedad. La tiene dentro, el musgo lo sabe.",
  "agua8": "Arterias que son puentes, de un líquido que construyó su propio camino",
  "agua9": "Tanque que emerge de las piedras de la quebrada.",
  "agua10": "Casa del agua.",
  "agua11": "Casita del agua.",
  "agua12": "Musgo que asfixia una arteria.",
  "agua13": "Arco de la dominación del agua.",
  "agua14": "Punto más alto alcanzado buscando el nacimiento del agua. Quebrada artificial.",
  "agua15": "Transporte aéreo acuático.",
  "agua16": "Manguera enredadera.",
  "agua17": "Cable de agua baja a la siguiente finca.",
  "agua18": "Bebedero para las vacas.",
  "agua19": "Manguera para calentar el agua con la cual bañarse en los días soleados.",
  "agua20": "Manguera para el lavadero.",
  "agua21": "Manguera loma abajo",
  "agua22": "Mangueras transitan por una travesía.",
  "agua23": "¿Es para el agua o es para la comida del toro?",
  "agua24": "Tanque para las vacas, vecinos del maíz y los frijoles.",
  "agua25": "Gran tanque de los vecinos",
  "agua26": "Lavadero de una ruina.",
  
  "soporte0": "Vigas para la ruina del difunto Manuel.",
  "soporte1": "Ambuleto. Señal del vacío de la ruina.",
  "soporte2": "Banca para los ausentes.",
  "soporte3": "Tendedero de contenedores.",
  "soporte4": "Cajón boca arriba.",
  "soporte5": "Agua para terneros que ya no están.",
  "soporte6": "Red para pescar hojarasca.",
  "soporte7": "Refugio para el acero.",
  "soporte8": "Mochila con potencial de llenarse.",
  "soporte9": "Nido.",
  "soporte10": "Plato para sal.",
  "soporte11": "Sal para los terneros ausentes.",
  "soporte12": "Ambuleto para juego.",
  "soporte13": "Altar para el nacimiento.",
  "soporte14": "Mesa para los terneros ausentes.",
  "soporte15": "Zapatos para los visitantes.",
  
  "huella0": "No es una huella es un hito.",
  "huella1": "Yo.",
  "huella2": "Abriendo el camino.",
  "huella3": "Desconocido.",
  "huella4": "Pisada de una roca.",
  "huella5": "Roca sobre tierra.",
  "huella6": "Perro.",
  "huella7": "Avalancha.",
  "huella8": "Ternero.",
  
  "rama0": "Listas para alimentar a fuego lento.",
  "rama1": "Detrás de la casa.",
  "rama2": "Para despejar el jardín.",
  "rama3": "Para acabar con el jardín.",
  "rama4": "Sin ramas y blandas.",
  "rama5": "Marchitadas.",
  "rama6": "Debiles.",
  "rama7": "Secas y rectas.",
  "rama8": "Pocas.",
  "rama9": "Perdidas",
  "rama10": "Horizontales.",
  "rama11": "Verticales.",
  "rama12": "Juntas.",
  "rama13": "Gruesas.",
  "rama14": "Desordenadas.",
  "rama15": "Ordenadas.",
  "rama16": "Dispersadas.",
  "rama17": "Almacenadas.",
  "rama18": "Cadavericas.",
  
  "puente0": "Antes de llegar al pueblo. Un camino estendido para llegar a la casa del molino.",
  "puente1": "Puente caido.",
  "puente2": "Puente enterrado",
  "puente3": "Puente para un charco",
  "puente4": "Para conectar dos lomas.",
  "puente5": "Puente sin camino",
  "puente6": "Puente para no embarrarse",
  "puente7": "Gran puente",
  "puente8": "Puente para completar el camino",
  "puente10": "Puente al gallinero",
  
  "puerta0": "Por aquí entran las vacas.",
  "puerta1": "Ventana encerrada.",
  "puerta2": "Salida hacia la gloria.",
  "puerta3": "Entrada a la espesura.",
  "puerta4": "Salida de la espesura.",
  "puerta5": "Cerca a la gloria.",
  "puerta6": "Puerta a la ruina.",
  "puerta7": "Por aquí llegan los terneros cuando se escapan.",
  "puerta8": "Hacia la antena.",
  "puerta9": "Una puerta.",
  
  "ruina0": "Molino.",
  "ruina1": "Ruina cerrada.",
  "ruina2": "No quedó ruina, solo la entrada.",
  "ruina3": "Caída de la gloria.",
  "ruina4": "La gloría.",
  "ruina5": "Casa de Manuel.",
  "ruina6": "Un bebedero.",
  "ruina7": "Saliendo de la vereda.",
  "ruina8": "A mitad de camino.",
  "ruina9": "La gran ruina.",
  "ruina10": "Antes de salir de Onzaga, de bloques de adobe.",
  "ruina11": "Subiendo al paramo."

  
  
};

document.addEventListener("DOMContentLoaded", () => {
  const allImgs = Array.from(document.querySelectorAll(".item img"));
  allImgs.forEach((img, idx) => {
    if (!img) return;
    const id = img.id || `image-${idx}`;
    let title = "";

    if (titulos[id]) title = titulos[id];

    if (!title) {
      title = id
        .replace(/[_\-]/g, " ")
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .replace(/[0-9]/g, "")
        .trim()
        .toUpperCase();
      if (!title) title = `Imagen ${idx + 1}`;
    }

    const item = img.closest(".item");
    if (item) item.setAttribute("data-title", title);
  });
});

