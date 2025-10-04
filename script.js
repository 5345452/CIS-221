const products = [
  {
    id: 1,
    name: "Classic Denim Jacket",
    price: 4500,
    img: "https://picsum.photos/seed/denim/600/400",
    desc: "Comfortable denim jacket for everyday wear."
  },
  {
    id: 2,
    name: "Summer Floral Dress",
    price: 3200,
    img: "https://picsum.photos/seed/dress/600/400",
    desc: "Lightweight dress perfect for warm days."
  },
  {
    id: 3,
    name: "Sneakers Street",
    price: 5200,
    img: "https://picsum.photos/seed/sneakers/600/400",
    desc: "Casual sneakers with great support."
  }
];

const offers = [
  { offer: "Back-to-School", item: "Classic Denim Jacket", discount: "20%", starts: "2025-09-20", ends: "2025-10-05" },
  { offer: "Weekend Flash", item: "Sneakers Street", discount: "15%", starts: "2025-09-27", ends: "2025-09-29" }
];

function formatKsh(n) {
  return "Ksh " + n.toLocaleString();
}

function renderProducts() {
  const grid = document.getElementById('productGrid');
  products.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <div>
        <div style="display:flex;justify-content:space-between;align-items:center">
          <h3 style="margin:0;font-size:16px">${p.name}</h3>
          <div class="price">${formatKsh(p.price)}</div>
        </div>
        <p style="margin:8px 0 12px;color:#555">${p.desc}</p>
        <button class="buy-btn" onclick="buy(${p.id})">Buy</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderOffers() {
  const body = document.getElementById('offersBody');
  offers.forEach(o => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${o.offer}</td><td>${o.item}</td><td>${o.discount}</td><td>${o.starts}</td><td>${o.ends}</td>`;
    body.appendChild(tr);
  });
}

function buy(id) {
  const p = products.find(x=>x.id===id);
  alert(`Thanks! You bought: ${p.name}\nPrice: ${formatKsh(p.price)}\n(This is just a demo)`);
}

document.getElementById('year').textContent = new Date().getFullYear();
renderProducts();
renderOffers();