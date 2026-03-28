document.addEventListener("DOMContentLoaded", function() {
  const carta = document.getElementById("carta");
  const boton = document.getElementById("abrir-btn");

  boton.addEventListener("click", function() {

    boton.style.transition = "opacity 0.4s ease";
    boton.style.opacity = "0";
    boton.disabled = true;

    setTimeout(() => {
      boton.style.display = "none";
      carta.classList.add("mostrar");

      iniciarCorazones();

    }, 400);
  });

  // 💖☁️ CORAZONES EN LOS LADOS
  function crearCorazon() {
    const corazon = document.createElement("div");
    corazon.className = "corazon";
    corazon.innerHTML = "♡(˃͈ ˂͈ ) ";

    const lado = Math.random() < 0.5 ? "izq" : "der";

    if (lado === "izq") {
      corazon.style.left = Math.random() * 280 + "px";
    } else {
      corazon.style.right = Math.random() * 280 + "px";
    }

    corazon.style.fontSize = (Math.random() * 15 + 18) + "px";
    corazon.style.animationDuration = (Math.random() * 3 + 4) + "s";

    document.body.appendChild(corazon);

    setTimeout(() => {
      corazon.remove();
    }, 7000);
  }

  function iniciarCorazones() {
    setInterval(crearCorazon, 400);
  }
});