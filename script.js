// Fitur Tambah ke Keranjang / Beli
const modal = document.getElementById("cart-modal");
const itemInfo = document.getElementById("item-info");

function addToCart(namaProduk, harga) {
  // Menampilkan modal checkout
  modal.style.display = "flex";
  itemInfo.innerText = `Anda akan membeli: ${namaProduk} seharga Rp ${harga.toLocaleString()}`;
}

function closeModal() {
  modal.style.display = "none";
}

function checkout() {
  alert(
    "Terima kasih! Pesanan Anda telah diterima. Tim KeringAbies akan menghubungi Anda.",
  );
  closeModal();
}

// Menutup modal jika user klik di luar kotak modal
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

// Logika Smooth Scroll (Sudah didukung CSS, tapi ini untuk memastikan kompatibilitas)
document.querySelectorAll(".nav-links a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth",
    });
  });
});
