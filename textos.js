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
    "Sobre las notas",
    "Referencias"


]
const parrafosTexto = [
    "Los signos son unidades básicas de la comunicación. Están conformados por significante, expresión física y significado, concepto o idea. Uno de los tipos de signos es el índice. Estos sostienen una relación de causalidad con su significado. Es decir que la expresión física de la materia comunica. Aunque da la ilusión de ser estática, se rige por el principio de la entropía, está cargada de energía potencial de cambio. La sucesión de cambios desde la física cuántica es lo que se entiende como tiempo. Los índices son producto de esa sucesión.<br><br> Mi tía me ha explicado que la forma de la punta de los huevos indica si en su interior hay un macho o hembra. Mary Caswell Stoddard y cinco autores más explican en su artículo /Avian egg shape: Form, function, and evolution./ que la forma ovalada o redondeada de los huevos está relacionada con la capacidad de vuelo de las aves. Siguiendo su lógica, los huevos de avestruz son más redondos que los huevos de halcón. <br><br> Entonces, en las gallinas los huevos más puntudos potencialmente volarían mejor que sus hermanos redondos. Así mismo, las hembras poseen una menor capacidad de vuelo que los machos. <br><br> Desde ambas perspectivas la forma de los huevos es un índice, pero su significado varía. En cualquier caso, podría decirse que es a través de los índices que los humanos han establecido una relación de comunicación con los múltiples agentes del entorno que se expresan a través del cambio.",
    "Los modificadores son tipos de signos con contenido de significado vacío que se llena dependiendo de quién lo enuncia, a qué apunta o dónde se ubica. Por ejemplo, aquí o allá.  Dependen no solo de quién las dice, sino que además del lugar desde donde las dice. Quiero pensar que es posible incluir dentro de esta categoría a todas las expresiones de lugar como arriba, abajo, adentro y afuera. Aunque parecen ser más precisas, solo logran ser estables en contextos donde la materia es dominada y privada de sus potencialidades. En el campo, lo que en un momento estaba adentro de una casa, ahora está afuera porque ahora es una ruina expuesta.<br><br> Sobre cambiar significados, la obra de Olga Amaral /el gran Muro/, Susan Richmond escribió en un artículo que al ensamblarla sobre las calles de Bogotá los retazos de tela asemejaban ser hojas secas. Mientras que en la obra /Otoño/, Cecilia Vicuña recolectó y lleno de hojas secas el Museo Nacional de Bellas Artes de Chile. Olga sacó de su taller telas y se convirtieron en hojas en su espacio natural. Cecilia llevó un indicador del otoño al espacio de exposición. Como ya lo mencionaba antes, son las relaciones físicas con el espacio las cuales llenan de significado los índices, también es de dónde emergen. Gadamer explica en la /actualidad de lo bello/ que hay un carácter lúdico en el arte. Los humanos crean sistemas de reglas sin fines específicos, en un constante devenir. El lenguaje usado por la materia en el campo responde al mismo juego sin fin.<br><br> Cuando estoy de visita a la finca, se espera que también ayude con las labores diarias. Por lo general me mandan a buscar cosas. Pueden ser huevos, frutas, leña, envases, bolsas, costales o hasta terneros. Sin importar cuál sea el objeto, a mí me cuesta entender dónde está a través de las palabras. Al principio se lo atribuía únicamente a que solo visito el lugar máximo dos veces al año, por lo que no estoy familiarizada espacialmente. Pero me he dado cuenta de que no entiendo a que se refieren muchas de las palabras que se usan en las indicaciones. Mi tía me decía que debía revisar si bajando en la loma que estaba después de la travesía había huevos de una gallina que tiene su nido al lado de una roca que a su vez tiene una roca encima. La instrucción es especifica, pero a la vez amplia. <br><br> ¿Cuál loma si todo alrededor es empinado? ¿A qué se refiere con travesía y porqué usa esa palabra todo el tiempo? Además, hay tantas rocas y hojas que se debe revisar minuciosamente alrededor de cada una.<br><br>Las lomas son empinadas, las travesías son planas.",
    "Los caminos trazados a punta de pala y pica pueden ser difuminados en principio por la maleza. No desaparecen de inmediato. Los gestos de los habitantes transforman el mundo, sí, pero para hacerlo debe conocerlo. Jaime Franco en su obra “Cruz de barro” construyó una figura concreta y maciza, da la impresión de surgir o hundirse en la montaña. Al estar hecha con barro, volverá a ser parte de la tierra. Se encuentran distintas maneras de activar el potencial de cambio que van más allá de la utilidad o un fin natural. El tiempo del entorno es asaltado y se convierte en parte del territorio. La intervención en el cambio natural de la materia crea nuevas realidades. Ana Mendieta en su serie “Siluetas”, deja con su cuerpo la marca de la ausencia de su tierra. Desde esos trabajos, se entiende que el cuerpo video y volverá a la tierra.<br><br>A mitad de este año, hubo un incendio en la loma de al frente. Las autoridades no señalaron un culpable o motivo. Mi tía cree que el responsable lo hizo para ampliar sus cultivos. Lo que antes era una masa verde y espesa, ahora es una mancha violeta. Del otro lado del valle, en el sendero que conecta las fincas de la vereda hay una travesía particular. Es un hito en el camino. No existe un pilar o letrero que lo anuncie, pero para todos se llama “la cruz”. El nombre se basa en la forma de los senderos que se marcaron por las pisadas. Es una línea recta plana que se conecta de frente a la siguiente colina, donde se encuentran tres caminos más. Dos hacia los costados, por la falda de la montaña, el restante continuaba en la misma dirección de la travesía, atravesando de frente la montaña por su cresta. Las intervenciones pueden ser intencionales o involuntarias. <br><br> Lo rural se construye constantemente con las manos y la palabra  ",
    "En el “Tratado de las imágenes sagradas y profanas” de Paleotti se definía a las imágenes como sucesiones de puntos y líneas con sentido, lo opuesto son huellas. El artículo de Krauss /Notas sobre el índice/ explica que los índices son tipos de signos cuyo significado está contenido dentro de las relaciones físicas que sostienen con su significado. Desmontando la idea de Paleotti de qué las huellas carecen de sentido. Por otro lado, Walter Benjamín en el arte en la época de su reproductibilidad técnica se refiere a la fotografía como un índice producto de las relaciones físicas de la luz sobre la superficie. Al alejarse físicamente de su significado, requiere de pies de página que lo hagan explícito.<br><br> Las fotos, al igual que las personas, requieren de extremidades que les permitan movilizarse. Físicamente es el papel y las piernas. Para movilizar el pensamiento están los órganos exosomáticos, establecen relaciones entre el adentro y el afuera. Para las personas es la boca, en las fotos son los pies que las acompañan. Durante mi último viaje tomé fotografías despreocupadas de todos los objetos que me llamaban la atención. Robert Smithson lo hizo con los monumentos de Passaic en un día. Para el, todos los elementos se convirtieron en monumentos. En mi caso, para los observadores la mayoría de las imágenes carecen de sentido. Es hasta que las agrupo y las nombro que su significado es alimentado. Al hacerlo, me di cuenta de que las imágenes conforman mi experiencia visitando la vereda. Mis notas más que esclarecedoras, son confusas.",
    "Mary Caswell Stoddard et al. Avian egg shape: Form, function, and evolution. Science. 356,1249-1254. (2017). DOI:10.1126/science.aaj1945<br><br>Susan Richmond, “Olga de Amaral, El gran muro,” in Smarthistory, July 27, 2023, accessed September 19, 2025, https://smarthistory.org/olga-de-amaral-el-gran-muro/. <br><br>Vicuña, C., López, M. A., Ades, D., Oliva, A., & Olavarría, R. (2022). Veroír el fracaso iluminado : Cecilia Vicuña. Banco de la República, Museo de Arte Miguel Urrutia.  <br><br>Gadamer, H. G., & Argullol, R. (1991). La actualidad de lo bello: el arte como juego, símbolo y fiesta. Ediciones Paidós. <br><br>Franco, J. (2006). Cruz en barro [Tapia pisada]. Herbert F. Jaime Franco. https://www.jaimefrancog.com/cruz-en-barro-earth-cross  <br><br>Ana MendiMendieta, A, & creator. (1980). Sin título, de la serie Silueta [Impresión en gelatina de plata]. Herbert F. Johnson Museum of Art. Introduction to Photography Collections at Cornell. Cornell University. https://jstor.org/stable/community.34584198 eta, Siluetas, 1973-1980. Serie de fotografías en blanco <br><br> Krauss, R. E. (1996). La originalidad de la vanguardia y otros mitos modernos. Alianza Editorial. <br><br> Smithson, R., Orvañanos, M., & Quintana Crelis, E. (2018). Robert Smithson : selección de escritos (D. Ortega & S. Schulz, Eds.). Alias. <br><br> Paleotti, G. (1582). Discorso intorno alle immagini sacre e profane. Fondazione Memofonte onlus Studio per l’elaborazione informatica delle fonti storico-artistiche. "
]
const titulo = document.getElementById("nombre");
const titulo1 = document.getElementById("nombre1");
const parrafos = document.getElementById("parrafos");

const parametros = new URLSearchParams(window.location.search);
const id = parseInt(parametros.get("id")); 



if (!isNaN(id) && titulos[id] && parrafosTexto[id]) {
    titulo.textContent = titulos[id];
    titulo1.textContent = titulos[id];
    parrafos.innerHTML = parrafosTexto[id];
} else {
   
    titulo.textContent = "Texto no encontrado";
    parrafos.textContent = "No se encontró el contenido solicitado.";
}


