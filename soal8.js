let produkArray = [
{ Produk: "TV", Kategori: "elektronik", Harga: 1000 },
{ Produk: "headphone", Kategori: "elektronik", Harga: 200 },
{ Produk: "baju", Kategori: "fashion", Harga: 50 },
{ Produk: "gitar", Kategori: "musik", Harga: 300 },
{ Produk: "sepatu", Kategori: "olahraga", Harga: 80 },
{ Produk: "kamera", Kategori: "elektronik", Harga: 600 },
];

function rekomendasiProduk(namaPelanggan, minatPelanggan) {
  // Filter produk berdasarkan kategori minat pelanggan
let produkSesuaiMinat = produkArray.filter((produk) =>
    minatPelanggan.includes(produk.Kategori)
);

  // Urutkan produk berdasarkan harga dari yang paling murah
produkSesuaiMinat.sort((a, b) => a.Harga - b.Harga);

  // Ambil produk paling murah atau tampilkan pesan jika tidak ada produk yang sesuai
if (produkSesuaiMinat.length > 0) {
    console.log(`${namaPelanggan}, berikut rekomendasi produk untuk Anda:`);
    produkSesuaiMinat.forEach((produk) => {
    console.log(`${produk.Produk}`);
    });
} else {
    console.log(
    `${namaPelanggan}, maaf tidak ada produk yang sesuai dengan minat Anda.`
    );
}
}

// Contoh penggunaan
let namaPelanggan = "Rina";
let minatPelanggan = ["elektronik", "musik", "fashion"];

rekomendasiProduk(namaPelanggan, minatPelanggan);
