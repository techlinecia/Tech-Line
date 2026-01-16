/* MENU */
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.onclick = () => {
  nav.classList.toggle("active");
};

/* ADMIN SECRETO */
let clicks = 0;
let timer;

const logo = document.getElementById("logo");
const adminBtn = document.getElementById("admin-btn");
const modal = document.getElementById("admin-modal");
const closeModal = document.getElementById("close-modal");

logo.onclick = () => {
  clicks++;
  clearTimeout(timer);
  timer = setTimeout(() => clicks = 0, 3000);

  if (clicks === 3) {
    adminBtn.style.display = "block";
    alert("Modo admin ativado 🔥");
    clicks = 0;
  }
};

adminBtn.onclick = () => modal.style.display = "flex";
closeModal.onclick = () => modal.style.display = "none";

modal.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};

/* SALVAR PC */
const form = document.getElementById("pc-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nome = document.getElementById("pc-nome").value;
  const config = document.getElementById("pc-config").value;
  const file = document.getElementById("pc-img").files[0];

  if (!file) return alert("Selecione uma imagem");

  const ref = storage.ref("pcs/" + Date.now() + "_" + file.name);
  const upload = await ref.put(file);
  const url = await upload.ref.getDownloadURL();

  await db.collection("pcs").add({
    nome,
    configuracoes: config,
    imagem: url,
    criadoEm: firebase.firestore.FieldValue.serverTimestamp()
  });

  alert("PC salvo com sucesso 🔥");
  modal.style.display = "none";
  form.reset();
  carregarPCs();
});

/* CARREGAR PCS */
async function carregarPCs() {
  const grid = document.getElementById("pcs-grid");
  grid.innerHTML = "";

  const snapshot = await db
    .collection("pcs")
    .orderBy("criadoEm", "desc")
    .get();

  snapshot.forEach(doc => {
    const pc = doc.data();
    grid.innerHTML += `
      <div class="pc-card">
        <img src="${pc.imagem}">
        <h3>${pc.nome}</h3>
        <p>${pc.configuracoes}</p>
      </div>
    `;
  });
}

carregarPCs();
