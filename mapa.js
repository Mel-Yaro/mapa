const interactivos = document.querySelectorAll(".interactivo");

interactivos.forEach(item => { item.addEventListener("mouseenter", () => {
    item.style.opacity = 1;   // fade-in
  });

   item.addEventListener("click", () => {
    const destino = item.getAttribute("data-url");
    if (destino) {
      window.location.href = destino;
    }
  });
});