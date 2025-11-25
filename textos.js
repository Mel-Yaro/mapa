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

/*document.addEventListener("click", (e) => {
e.stopPropagation();
window.location.href = "mapa.html";
});*/

const titulos = [
    "Leer la materia",
    "Lomas y travesias"
]
const parrafosTexto = [
    "Los signos son unidades básicas de la comunicación. Están conformados por significante, expresión física, y significado, concepto o idea. Uno de los tipos de signos es el índice. Estos sostienen una relación de causalidad con su significado. Es decir que la expresión física de la materia comunica. Aunque da la ilusión de ser estática, se rige por el principio de la entropía, es decir está cargada de energía potencial de cambio. La sucesión de cambios desde la física cuántica es lo que se entiende como tiempo. Los índices son producto de esa sucesión. Mi tía me ha explicado que la forma de la punta de los huevos indica si en su interior hay un macho o hembra. Mary Caswell Stoddard y cinco autores más explican en su artículo Avian egg shape Form, func tion, and evolution. que la forma ovalada o redondeada de los huevos está relacionada con la capacidad de vuelo de las aves. Siguiendo su lógica, los huevos de avestruz son más redondos que los huevos. Entonces, en las gallinas los huevos más puntudos potencialmente volarían mejor que sus hermanos redondos. Y las hembras poseen una menor capacidad de vuelo que los machos. Desde amabas perspectivas la forma de los huevos es un índice, pero su significado varía. En ese sentido, podría decirse que es a través de los índices que los humanos han establecido una relación de comunicación con los múltiples agentes del entorno que se expresan a través del cambio.",
"Los modificadores son tipos de signos con contenido de significado vacío que se llena dependiendo de quién lo enuncia, a qué apunta o donde se ubica. Por ejemplo, aquí o allá.  Dependen no solo de quién las dice, sino que además del lugar desde donde las dice. Quiero pensar que es posible incluir dentro de esta categoría a todas las expresiones de lugar como arriba, abajo, adentro y afuera. Aunque parecen ser más precisas, solo logran ser estables en contextos donde la materia es dominada y privada de sus potencialidades. Mientras que, en el campo, lo que en un momento estaba adentro de una casa, ahora está afuera porque ahora es una ruina expuesta. Cuando estoy de visita a la finca, se espera que también ayude con las labores diarias. Por lo general me mandan a buscar cosas. Pueden ser huevos, frutas, leña, envases, bolsas, costales o hasta terneros. Sin importar cual sea el objeto a mí me cuesta entender dónde está a través de las palabras. Al principio se lo atribuía únicamente a que solo visito el lugar máximo dos veces al año, por lo que no estoy familiarizada espacialmente. Pero me he dado cuenta de que no entiendo a que se refieren muchas de las palabras que se usan en las indicaciones. Mi tía me decía que debía revisar si bajando en la loma que estaba después de la travesía había huevos de una gallina que tiene su nido al lado de una roca que a su vez tiene una roca encima. La instrucción es especifica, pero a la vez amplia. ¿Cuál loma si todo alrededor es empinado? ¿A qué se refiere con travesía y porqué usa esa palabra todo el tiempo? Además, hay tantas rocas y hojas que se debe revisar minuciosamente alrededor de cada una. Las lomas son empinadas, las travesías son planas.  "
]
const titulo = document.getElementById("nombre");
const parrafos = document.getElementById("parrafos");

const parametros = new URLSearchParams(window.location.search);
const id = parseInt(parametros.get("id")); 



if (!isNaN(id) && titulos[id] && parrafosTexto[id]) {
    titulo.textContent = titulos[id];
    parrafos.textContent = parrafosTexto[id];
} else {
   
    titulo.textContent = "Texto no encontrado";
    parrafos.textContent = "No se encontró el contenido solicitado.";
}


