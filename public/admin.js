
const allowedAdmins = ["admin1", "admin2"]; // замените на Telegram usernames

const currentUser = prompt("Введите имя администратора:");
if (allowedAdmins.includes(currentUser)) {
  document.getElementById("admin-auth").style.display = "none";
  document.getElementById("admin-panel").style.display = "block";
  loadInventory();
} else {
  document.getElementById("admin-auth").innerText = "Нет доступа";
}

function loadInventory() {
  fetch("/api/products")
    .then(res => res.json())
    .then(data => {
      document.getElementById("inventory").innerHTML = data.map(p =>
        `${p.title} — ${p.stock} шт.`
      ).join("<br>");
    });
}

function addProduct() {
  const title = document.getElementById("title").value;
  const price = parseInt(document.getElementById("price").value);
  const stock = parseInt(document.getElementById("stock").value);
  fetch("/api/add-product", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, price, stock })
  }).then(() => {
    alert("Товар добавлен!");
    loadInventory();
  });
}
