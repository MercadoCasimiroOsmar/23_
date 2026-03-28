const jardin = document.getElementById("jardin");
const particulas = document.getElementById("particulas");

// colores
let colores = ["#ff6f91", "#ff9671", "#ffc75f", "#f9f871", "#ffb3f2", "#eca24e"];

// 🌸 FLORES ABAJO (CON TALLO)
function crearFlor() {
  let flor = document.createElement("div");
  flor.className = "flor";

  let x = Math.random() * window.innerWidth;
  flor.style.left = x + "px";

  let color = colores[Math.floor(Math.random() * colores.length)];

  flor.innerHTML = `
    <div class="flower-top">
      <div class="petalo" style="background:${color}"></div>
      <div class="petalo" style="background:${color}"></div>
      <div class="petalo" style="background:${color}"></div>
      <div class="petalo" style="background:${color}"></div>
      <div class="centro"></div>
    </div>
    <div class="tallo"></div>
    <div class="hoja izq"></div>
    <div class="hoja der"></div>
  `;

  jardin.appendChild(flor);
}

// 🌷 FLORES ARRIBA (SIN TALLO)
function crearFlorFlotante() {
  let flor = document.createElement("div");
  flor.className = "flor flotante";

  let x = Math.random() * window.innerWidth;
  let y = Math.random() * (window.innerHeight / 2);

  flor.style.left = x + "px";
  flor.style.top = y + "px";

  let color = colores[Math.floor(Math.random() * colores.length)];

  flor.innerHTML = `
    <div class="flower-top">
      <div class="petalo" style="background:${color}"></div>
      <div class="petalo" style="background:${color}"></div>
      <div class="petalo" style="background:${color}"></div>
      <div class="petalo" style="background:${color}"></div>
      <div class="centro"></div>
    </div>
  `;

  jardin.appendChild(flor);
}

// ✨ PARTÍCULAS
function crearParticula() {
  let p = document.createElement("div");
  p.className = "particula";

  p.style.left = Math.random() * window.innerWidth + "px";
  p.style.top = window.innerHeight + "px";

  particulas.appendChild(p);

  setTimeout(() => {
    p.remove();
  }, 5000);
}

// INTERVALOS
setInterval(crearFlor, 300);         // jardín lleno
setInterval(crearFlorFlotante, 800); // arriba
setInterval(crearParticula, 200);    // partículas