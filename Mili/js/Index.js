function crearFuego(x, y) {

  const colores = [
    "#70040f", // rojo
    "#ffc02e", // amarillo
    "#06d6a0", // verde
    "#054a8b", // azul
    "#eb076d"  // rosa fuerte
  ];

  for (let i = 0; i < 40; i++) {

    const fw = document.createElement("div");
    fw.className = "firework";

    // 👇 AQUÍ estaba tu problema
    fw.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];

    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 120;

    fw.style.left = x + "px";
    fw.style.top = y + "px";

    fw.style.setProperty("--x", Math.cos(angle) * distance + "px");
    fw.style.setProperty("--y", Math.sin(angle) * distance + "px");

    document.body.appendChild(fw);

    setTimeout(() => fw.remove(), 1000);
  }
}

// 🎆 automático
setInterval(() => {
  crearFuego(
    Math.random() * window.innerWidth,
    Math.random() * (window.innerHeight / 2)
  );
}, 600);