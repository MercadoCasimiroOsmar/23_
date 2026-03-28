const contenedor = document.getElementById("contenedor");

// función corazón
function heartShape(t) {
  let x = 16 * Math.pow(Math.sin(t), 3);
  let y = 13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t);
  return { x, y };
}

// control
let posiciones = [];
let activos = 0;
const MAX_CORAZONES = 8;

// validar posición (mejor distribución)
function posicionValida(x, y) {
  let centroX = window.innerWidth / 2;
  let centroY = window.innerHeight / 2;

  let dxCentro = x - centroX;
  let dyCentro = y - centroY;
  let distanciaCentro = Math.sqrt(dxCentro * dxCentro + dyCentro * dyCentro);

  // 🚫 proteger centro
  if (distanciaCentro < 280) return false;

  // evitar amontonamiento (más separación)
  for (let p of posiciones) {
    let dx = x - p.x;
    let dy = y - p.y;
    let distancia = Math.sqrt(dx * dx + dy * dy);

    if (distancia < 160) return false;
  }

  return true;
}

// crear corazón normal
function crearCorazon(xCenter, yCenter, escala) {
  let i = 0;
  let max = 150;

  let grupo = document.createElement("div");
  grupo.className = "grupo-corazon";

  grupo.style.left = xCenter + "px";
  grupo.style.top = yCenter + "px";

  contenedor.appendChild(grupo);
  activos++;

  let intervalo = setInterval(() => {
    let t = (i / max) * 2 * Math.PI;
    let pos = heartShape(t);

    let heart = document.createElement("div");
    heart.className = "corazon";
    heart.textContent = "💞";

    heart.style.fontSize = "18px";
    heart.style.left = pos.x * escala + "px";
    heart.style.top = -pos.y * escala + "px";

    grupo.appendChild(heart);

    // animación suave
    setTimeout(() => {
      heart.style.opacity = "1";
      heart.style.transform = "scale(1)";
    }, 10);

    i++;

    if (i > max) {
      clearInterval(intervalo);

      setTimeout(() => {
        grupo.style.opacity = "0";

        setTimeout(() => {
          grupo.remove();
          activos--;

          // eliminar posición correcta (no shift)
          posiciones = posiciones.filter(p => p.x !== xCenter || p.y !== yCenter);

        }, 1000);

      }, 7000);
    }

  }, 30);
}

// 💖 corazón especial Mily (más grande)
function crearCorazonMily() {
  let xCenter = window.innerWidth / 2;
  let yCenter = window.innerHeight / 2;

  let escala = 12; // 🔥 MÁS GRANDE

  let grupo = document.createElement("div");
  grupo.className = "grupo-corazon mily";

  grupo.style.left = xCenter + "px";
  grupo.style.top = yCenter + "px";

  contenedor.appendChild(grupo);

  let i = 0;
  let max = 180;

  let intervalo = setInterval(() => {
    let t = (i / max) * 2 * Math.PI;
    let pos = heartShape(t);

    let heart = document.createElement("div");
    heart.className = "corazon especial";
    heart.textContent = "♡";

    // 🔥 más grande y visible
    heart.style.fontSize = "22px";

    heart.style.left = pos.x * escala + "px";
    heart.style.top = -pos.y * escala + "px";

    grupo.appendChild(heart);

    i++;

    if (i > max) {
      clearInterval(intervalo);

      let texto = document.createElement("div");
      texto.className = "texto-mily";
      texto.innerText = "Mily ";

      grupo.appendChild(texto);
    }

  }, 25);
}

// generar corazones (MEJOR DISTRIBUCIÓN REAL)
function generarCorazon() {
  if (activos >= MAX_CORAZONES) return;

  let width = window.innerWidth;
  let height = window.innerHeight;

  let x, y;
  let intentos = 0;

  do {
    // 🔥 distribución uniforme REAL
    x = Math.random() * width;
    y = Math.random() * height;
    intentos++;
  } while (!posicionValida(x, y) && intentos < 200);

  if (intentos >= 200) return;

  posiciones.push({ x, y });

  let escala = Math.random() * 2 + 5;

  crearCorazon(x, y, escala);
}

// ritmo más natural
setInterval(() => {
  generarCorazon();
}, 1600);

// precarga equilibrada
setTimeout(() => {
  for (let i = 0; i < 4; i++) {
    generarCorazon();
  }
}, 500);

// lanzar corazón especial
setTimeout(() => {
  crearCorazonMily();
}, 2500);