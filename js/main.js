// Al cargar el documento
document.addEventListener("DOMContentLoaded", () => {
  // Actualizar año del footer
  const yearSpan = document.getElementById("anio-actual");
  if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
  }

  // Botón "Ir al inicio"
  const btnIrArriba = document.getElementById("btn-ir-arriba");
  if (btnIrArriba) {
    btnIrArriba.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // Contador dinámico de proyectos (contando elementos .item dentro de #proyectos)
  const proyectosSection = document.getElementById("proyectos");
  const contador = document.querySelector("#contador-proyectos span");

  if (proyectosSection && contador) {
    const proyectos = proyectosSection.querySelectorAll(".item");
    contador.textContent = proyectos.length.toString();
  }
});
