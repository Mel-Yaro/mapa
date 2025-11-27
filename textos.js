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

const titulos = [
    "Leer la materia",
    "Lomas y travesias",
    "Asalto al tiempo",
    "Sobre los mapas"


]
const parrafosTexto = [
    "Los signos son unidades básicas de la comunicación. Están conformados por significante, expresión física, y significado, concepto o idea. Uno de los tipos de signos es el índice. Estos sostienen una relación de causalidad con su significado. Es decir que la expresión física de la materia comunica. Aunque da la ilusión de ser estática, se rige por el principio de la entropía, es decir está cargada de energía potencial de cambio. La sucesión de cambios desde la física cuántica es lo que se entiende como tiempo. Los índices son producto de esa sucesión. Mi tía me ha explicado que la forma de la punta de los huevos indica si en su interior hay un macho o hembra. Mary Caswell Stoddard y cinco autores más explican en su artículo Avian egg shape Form, func tion, and evolution. que la forma ovalada o redondeada de los huevos está relacionada con la capacidad de vuelo de las aves. Siguiendo su lógica, los huevos de avestruz son más redondos que los huevos. Entonces, en las gallinas los huevos más puntudos potencialmente volarían mejor que sus hermanos redondos. Y las hembras poseen una menor capacidad de vuelo que los machos. Desde amabas perspectivas la forma de los huevos es un índice, pero su significado varía. En ese sentido, podría decirse que es a través de los índices que los humanos han establecido una relación de comunicación con los múltiples agentes del entorno que se expresan a través del cambio.",
"Los modificadores son tipos de signos con contenido de significado vacío que se llena dependiendo de quién lo enuncia, a qué apunta o donde se ubica. Por ejemplo, aquí o allá.  Dependen no solo de quién las dice, sino que además del lugar desde donde las dice. Quiero pensar que es posible incluir dentro de esta categoría a todas las expresiones de lugar como arriba, abajo, adentro y afuera. Aunque parecen ser más precisas, solo logran ser estables en contextos donde la materia es dominada y privada de sus potencialidades. Mientras que, en el campo, lo que en un momento estaba adentro de una casa, ahora está afuera porque ahora es una ruina expuesta. Cuando estoy de visita a la finca, se espera que también ayude con las labores diarias. Por lo general me mandan a buscar cosas. Pueden ser huevos, frutas, leña, envases, bolsas, costales o hasta terneros. Sin importar cual sea el objeto a mí me cuesta entender dónde está a través de las palabras. Al principio se lo atribuía únicamente a que solo visito el lugar máximo dos veces al año, por lo que no estoy familiarizada espacialmente. Pero me he dado cuenta de que no entiendo a que se refieren muchas de las palabras que se usan en las indicaciones. Mi tía me decía que debía revisar si bajando en la loma que estaba después de la travesía había huevos de una gallina que tiene su nido al lado de una roca que a su vez tiene una roca encima. La instrucción es especifica, pero a la vez amplia. ¿Cuál loma si todo alrededor es empinado? ¿A qué se refiere con travesía y porqué usa esa palabra todo el tiempo? Además, hay tantas rocas y hojas que se debe revisar minuciosamente alrededor de cada una. Las lomas son empinadas, las travesías son planas.  ",
"Los caminos trazados a punta de pala y pica pueden ser difuminados en principio por la maleza. No desaparecen de inmediato. Una población se considera sedentaria cuando interviene el espacio. Transforma el mundo, pero para hacerlo debe conocerlo. En “Textiles muiscas y guanes” Gladys Tavera y Carmen Urbina mencionan los aportes materiales son “fruto de la observación de la naturaleza, base de un complejo proceso cultural”. Se encuentran distintas maneras de activar el potencial de cambio que van más allá de la utilidad o un fin natural. El tiempo del entorno es asaltado y se convierte en parte del territorio. La intervención en el cambio natural de la materia crea nuevas realidades. A mitad de este año, hubo un incendio en la loma de al frente. Las autoridades no señalaron un culpable o motivo. Mi tía cree que el responsable lo hizo para ampliar sus cultivos. Lo que antes era una masa verde y espesa, ahora es una mancha violeta. Del otro lado del valle, en el sendero que conecta las fincas de la vereda hay una travesía particular. Es un hito en el camino. No existe un pilar o letrero que lo anuncio, pero para todos se llama “la cruz”. El nombre se basa en la forma de los senderos que se marcaron por las pisadas. Es una línea recta plana que se conecta de frente a la siguiente colina, donde se encuentran tres caminos más. Dos hacia los costados, por la falda de la montaña, el restante continuaba en la misma dirección de la travesía, atravesando de frente la montaña por su cresta. Las intervenciones pueden ser intencionales o involuntarias. Lo rural se construye constantemente con las manos y la palabra ",
"En el artículo “El mapa como metáfora o la espacialización del pensamiento” Carla Lois explica que los mapas no solo pueden ser utilizados para referirse a espacios reales. Por eso los entiende más allá de la noción cartesiana, puntos y líneas sobre un plano que abstraen la superficie real. Entendiendo los mapas como metáforas que permiten comprender lo desconocido. Es por eso por lo que siendo yo aún ajena al campo siento la necesidad de crear mapas, mientras que mis familiares no lo requieren. Puede ser que la intervención que ellos han ejecutado sobre el espacio sea producto de su comprensión. Por lo que el territorio es un mapa en sí mismo. No solo es la materia que ocupa un espacio, también es el espacio de los humanos que lo habitan. Nombrar y construir son actos fundacionales del territorio rural. Ambas acciones resultan ser hitos que indican la dirección y distancias entre otros hitos e índices humanos y no humanos." 
]
const titulo = document.getElementById("nombre");
const titulo1 = document.getElementById("nombre1");
const parrafos = document.getElementById("parrafos");

const parametros = new URLSearchParams(window.location.search);
const id = parseInt(parametros.get("id")); 



if (!isNaN(id) && titulos[id] && parrafosTexto[id]) {
    titulo.textContent = titulos[id];
    titulo1.textContent = titulos[id];
    parrafos.textContent = parrafosTexto[id];
} else {
   
    titulo.textContent = "Texto no encontrado";
    parrafos.textContent = "No se encontró el contenido solicitado.";
}


