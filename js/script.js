/* ================= MENU MOBILE ================= */
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.onclick = () => {
  nav.classList.toggle("active");
};

/* ================= LISTA DE PCS (MANUAL) ================= */
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

/* ================= RENDERIZAR PCS ================= */
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
