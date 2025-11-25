
const txMateria = document.getElementById("tx-materia");
if (txMateria) {
  txMateria.addEventListener("click", () => {
    window.location.href = "textos.html?id=0";   
  });
}

const txLomas = document.getElementById("tx-lomas");
if (txMateria) {
  txLomas.addEventListener("click", () => {
    window.location.href = "textos.html?id=1";   
  });
}

const txAsalto = document.getElementById("tx-asalto");
if (txMateria) {
  txAsalto.addEventListener("click", () => {
    window.location.href = "textos.html?id=2";   
  });
}

const cosasHuella = document.getElementById("cosas-huella");
cosasHuella.addEventListener("click", (e) => {
e.stopPropagation();
window.location.href = "imagenes.html";
});

cosasHuella.addEventListener("mouseenter", () => {
    cosasHuella.style.opacity = "1";
  });

  cosasHuella.addEventListener("mouseleave", () => {
    cosasHuella.style.opacity = "0.2";
  });

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