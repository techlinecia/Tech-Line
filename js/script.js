/* ================= MENU MOBILE ================= */
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

if (menuToggle && nav) {
  menuToggle.onclick = () => {
    nav.classList.toggle("active");
  };
}

/* ================= LISTA DE PCS ================= */
const pcs = [
  {
    nome: "PC Gamer Ryzen 5",
    configuracoes: "Ryzen 5 5600 | 16GB RAM | RTX 3060 | SSD 1TB",
    imagem: "img/pc 1.png"
  },
  {
    nome: "PC Gamer Intel i5",
    configuracoes: "i5 12400F | 16GB RAM | RX 6600 | SSD 512GB",
    imagem: "img/pc 2.png"
  },
  {
    nome: "PC Gamer High-End",
    configuracoes: "Ryzen 7 5800X | 32GB RAM | RTX 4070 | NVMe 1TB",
    imagem: "img/pc 3.webp"
  }
];

function carregarPCs() {
  const grid = document.getElementById("pcs-grid");
  if (!grid) return;

  grid.innerHTML = "";

  pcs.forEach(pc => {
    grid.innerHTML += `
      <div class="pc-card">
        <img src="${pc.imagem}" alt="${pc.nome}">
        <h3>${pc.nome}</h3>
        <p>${pc.configuracoes}</p>
      </div>
    `;
  });
}

carregarPCs();

/* ================= TROCAR MAPA ================= */
function trocarMapa(unidade) {
  const mapa = document.getElementById("mapa");
  const info = document.getElementById("info-unidade");
  const link = document.getElementById("link-maps");
  const botoes = document.querySelectorAll(".btn-unidade");

  if (!mapa || !info || !link) return;

  botoes.forEach(btn => btn.classList.remove("active"));

  if (unidade === "zona7") {
    mapa.src =
      "https://www.google.com/maps?q=Rua+Doutor+Arnaldo+Busato+430+Zona+7+Cianorte+PR&output=embed";

    info.innerHTML = `
      <p><strong>Endereço:</strong><br>
      Rua Doutor Arnaldo Busato, 430 – Zona 7</p>

      <p><strong>Atendimento:</strong><br>
      Seg à Sex • 09h às 18h<br>
      Sáb • 13h às 17h</p>
    `;

    link.href =
      "https://www.google.com/maps/search/Rua+Doutor+Arnaldo+Busato+430+Zona+7+Cianorte+PR";

    botoes[0].classList.add("active");
  }

  if (unidade === "bemviver") {
    mapa.src =
      "https://www.google.com/maps?q=Rua+Cecilia+Meireles+395+Bem+Viver+Cianorte+PR&output=embed";

    info.innerHTML = `
      <p><strong>Endereço:</strong><br>
      Rua Cecília Meireles, 395 – Bem Viver</p>

      <p><strong>Atendimento:</strong><br>
      Seg à Sex • 09h às 18h<br>
      Sáb • 13h às 17h</p>
    `;

    link.href =
      "https://www.google.com/maps/search/Rua+Cecilia+Meireles+395+Bem+Viver+Cianorte+PR";

    botoes[1].classList.add("active");
  }
}

/* ================= MAPA PADRÃO ================= */
window.onload = () => {
  trocarMapa("bemviver");
};
