
const txMateria = document.getElementById("tx-materia");
if (txMateria) {
  txMateria.addEventListener("click", () => {
    window.location.href = "textos.html?id=0";   
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