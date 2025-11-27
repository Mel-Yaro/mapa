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
  "agua1": "Poza en la loma",
  "agua2": "Quebrada junto al puente",
  "agua3": "Nacimiento del arroyo",
  "soporte": "Soporte de exposición",
  "huella": "Huella sobre roca",
  "rama5": "Maraña sobre camino"
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

