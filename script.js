/*
  SAMA BOUTIQUE — configuration simple
  IMPORTANT : remplacez WHATSAPP_NUMBER par votre numéro WhatsApp au format international,
  chiffres uniquement. Exemple Sénégal : 221771234567 (sans +, espace ni tiret).
  Les produits ci-dessous sont des exemples et doivent être remplacés par votre stock et vos prix.
*/
const WHATSAPP_NUMBER = "221762723824";

const products = [
  {id:1,name:"Ordinateur portable",category:"Ordinateurs",price:250000,icon:"💻",description:"Pour les études, le bureau et la navigation."},
  {id:2,name:"Souris sans fil",category:"Accessoires",price:7500,icon:"🖱️",description:"Une souris pratique pour le travail quotidien."},
  {id:3,name:"Casque audio",category:"Accessoires",price:12000,icon:"🎧",description:"Pour écouter de la musique et passer des appels."},
  {id:4,name:"Smartphone",category:"Téléphones",price:95000,icon:"📱",description:"Un téléphone polyvalent pour vos activités."},
  {id:5,name:"Clavier USB",category:"Accessoires",price:8500,icon:"⌨️",description:"Clavier pratique pour ordinateur de bureau."},
  {id:6,name:"Clé USB",category:"Accessoires",price:5000,icon:"💾",description:"Pour transporter et sauvegarder vos fichiers."},
  {id:7,name:"Enceinte Bluetooth",category:"Électronique",price:18000,icon:"🔊",description:"Un son portable pour vos moments de détente."},
  {id:8,name:"Routeur Wi-Fi",category:"Électronique",price:22000,icon:"📶",description:"Solution de connexion pour la maison ou le bureau."}
];

let activeCategory = "Tous";
let cart = [];
const money = n => new Intl.NumberFormat("fr-FR").format(n) + " FCFA";
const grid = document.getElementById("product-grid");
const search = document.getElementById("search");
const empty = document.getElementById("empty-state");
const dock = document.getElementById("cart-dock");
const dialog = document.getElementById("checkout-dialog");

function whatsappUrl(message) {
  if (!/^\d{8,15}$/.test(WHATSAPP_NUMBER)) {
    alert("Avant de commander, configurez votre numéro WhatsApp dans le fichier script.js (constante WHATSAPP_NUMBER).");
    return null;
  }
  return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
}
document.querySelectorAll("[data-whatsapp-message]").forEach(a => {
  a.addEventListener("click", e => {
    e.preventDefault();
    const url = whatsappUrl(a.dataset.whatsappMessage);
    if (url) window.open(url, "_blank", "noopener");
  });
});

function renderProducts() {
  const q = search.value.trim().toLowerCase();
  const filtered = products.filter(p =>
    (activeCategory === "Tous" || p.category === activeCategory) &&
    (p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.category.toLowerCase().includes(q))
  );
  grid.innerHTML = filtered.map(p => `
    <article class="product-card">
      <div class="product-visual"><span class="category-label">${p.category}</span><span aria-hidden="true">${p.icon}</span></div>
      <div class="product-info"><h3>${p.name}</h3><p>${p.description}</p>
        <div class="product-bottom"><span class="price">${money(p.price)}</span><button class="add-btn" aria-label="Ajouter ${p.name}" data-add="${p.id}">+</button></div>
      </div>
    </article>`).join("");
  empty.hidden = filtered.length > 0;
  grid.querySelectorAll("[data-add]").forEach(btn => btn.addEventListener("click", () => addToCart(Number(btn.dataset.add))));
}
function addToCart(id) {
  const existing = cart.find(x => x.id === id);
  if (existing) existing.qty += 1;
  else cart.push({id,qty:1});
  renderCart();
}
function renderCart() {
  const count = cart.reduce((s,x) => s + x.qty, 0);
  const total = cart.reduce((s,x) => s + products.find(p => p.id === x.id).price * x.qty, 0);
  dock.hidden = count === 0;
  document.getElementById("cart-count").textContent = count + (count > 1 ? " articles" : " article");
  document.getElementById("cart-total").textContent = money(total);
}
document.getElementById("filters").addEventListener("click", e => {
  const btn = e.target.closest("[data-category]");
  if (!btn) return;
  activeCategory = btn.dataset.category;
  document.querySelectorAll(".filter").forEach(b => b.classList.toggle("active", b === btn));
  renderProducts();
});
search.addEventListener("input", renderProducts);
document.getElementById("checkout").addEventListener("click", () => dialog.showModal());
document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
document.getElementById("checkout-form").addEventListener("submit", e => {
  e.preventDefault();
  if (!cart.length) return;
  const name = document.getElementById("customer-name").value.trim();
  const phone = document.getElementById("customer-phone").value.trim();
  const delivery = document.getElementById("delivery").value;
  const payment = document.getElementById("payment").value;
  const note = document.getElementById("customer-note").value.trim();
  const lines = cart.map(x => {
    const p = products.find(y => y.id === x.id);
    return `- ${p.name} x${x.qty} : ${money(p.price * x.qty)}`;
  });
  const total = cart.reduce((s,x) => s + products.find(p => p.id === x.id).price * x.qty, 0);
  const message = [
    "Bonjour Sama Boutique, je souhaite passer cette commande :",
    "",
    ...lines,
    "",
    `TOTAL PRODUITS : ${money(total)}`,
    `Nom : ${name}`,
    `Téléphone : ${phone}`,
    `Réception : ${delivery}`,
    `Paiement souhaité : ${payment}`,
    note ? `Adresse / précision : ${note}` : "",
    "",
    "Merci de confirmer la disponibilité, les frais éventuels de livraison et les modalités de paiement."
  ].filter(Boolean).join("\n");
  const url = whatsappUrl(message);
  if (url) window.open(url, "_blank", "noopener");
});
document.getElementById("year").textContent = new Date().getFullYear();
renderProducts();
