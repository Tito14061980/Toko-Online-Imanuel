let keranjang = [];
let total = 0;

function tambahKeKeranjang(nama, harga) {
  keranjang.push({ nama, harga });
  total += harga;
  tampilkanKeranjang();
}

function tampilkanKeranjang() {
  const list = document.getElementById("keranjang-list");
  const totalEl = document.getElementById("total-harga");

  list.innerHTML = ""; // kosongkan dulu
  keranjang.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.nama} - Rp ${item.harga.toLocaleString()}`;
    list.appendChild(li);
  });

  totalEl.textContent = `Rp ${total.toLocaleString()}`;
}
