
fetch("/api/products")
  .then(res => res.json())
  .then(data => {
    const catalog = document.getElementById("catalog");
    catalog.innerHTML = data.map(p => `
      <div>
        <h2>${p.title}</h2>
        <p>Цена: ${p.price}₽ | В наличии: ${p.stock}</p>
        <button onclick="addToCart('${p.id}')">Добавить в корзину</button>
      </div>`).join("");
  });

let cart = [];
function addToCart(id) {
  fetch("/api/add-to-cart", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) })
    .then(() => alert("Добавлено в корзину"));
}
