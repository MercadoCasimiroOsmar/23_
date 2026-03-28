document.addEventListener("DOMContentLoaded", () => {

  const contenedor = document.getElementById("contenedor");

 const frases = [
  "Eres lo más hermoso que la vida me ha regalado.(づ๑•ᴗ•๑)づ♡ <(⸝⸝ᵕᴗᵕ⸝⸝<)",
  "Desde que llegaste, cada día tiene un color más brillante. (͠≖ ͜ʖ͠≖)",
  "Te elegiría en cada vida, mil veces y sin dudarlo. (ദ്ദി˙ᗜ˙)",
  "Eres mi refugio, mi lugar seguro y favorito. ｡◕‿‿◕｡",
  "A tu lado, incluso lo más simple se vuelve extraordinario. ♡(˃͈ ˂͈ )",
   "Hoy celebro todo lo que eres para mí Te amo mucho mucho (◦'ںˉ◦)",
  "Contigo siento algo  que nunca imaginé pero que ahora siempre quiero. ( ꈍ◡ꈍ)",
  "Forelsket y Yuanfen ???.(ง •̀_•́)ง",
  "Eres la casualidad mas bonita. （♡⌂♡）",
  "A tu lado, cada momento se siente eterno y perfecto. ε(´｡•᎑•`)っ 💕 ",
  "Eres mi todo . (づ ᴗ _ᴗ)づ♡",
  "Mi mundo comenzó y termina contigo, siempre tú. (ɔˆ ³(ˆ⌣ˆc)"
];

  // 💌 CREAR CARTAS
  function crearCards() {
    frases.forEach(frase => {
      let card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <div class="card-inner">
          <div class="cara frente">💌 Toca</div>
          <div class="cara atras">${frase}</div>
        </div>
      `;

      card.addEventListener("click", () => {
        card.classList.toggle("volteada");
      });

      contenedor.appendChild(card);
    });
  }

  // 💖 CREAR CORAZONES
  function crearCorazon() {
    let corazon = document.createElement("div");
    corazon.className = "corazon";
    corazon.innerHTML = "💕    💕    💕";

    corazon.style.left = Math.random() * window.innerWidth + "px";
    corazon.style.fontSize = (Math.random() * 20 + 15) + "px";
    corazon.style.animationDuration = (Math.random() * 3 + 4) + "s";

    document.body.appendChild(corazon);

    setTimeout(() => {
      corazon.remove();
    }, 7000);
  }

  // intervalos
  setInterval(crearCorazon, 250);

  crearCards();
});