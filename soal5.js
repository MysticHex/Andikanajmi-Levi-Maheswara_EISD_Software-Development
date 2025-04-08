function hitungKombinasiUsername(nama, maxPanjang = 6) {
    const namaClean = nama.toLowerCase().replace(/\s/g, "");
    
    const kombinasiUsername = [];
    
    // Hitung semua kemungkinan substring dengan panjang 1 sampai maxPanjang
    for (let panjang = 1; panjang <= maxPanjang; panjang++) {
        for (let i = 0; i <= namaClean.length - panjang; i++) {
            const substring = namaClean.substring(i, i + panjang);
            kombinasiUsername.push(substring);
        }
    }
    return {
        totalKombinasi: kombinasiUsername.length,
        daftarKombinasi: kombinasiUsername
    };
}

// Contoh penggunaan
const namaLengkap = "Naip Lovyu";
const result = hitungKombinasiUsername(namaLengkap);

console.log(`Total kombinasi username yang mungkin: ${result.totalKombinasi}`);
console.log("Daftar kombinasi username:");
result.daftarKombinasi.forEach((username, index) => {
    console.log(`${index + 1}. ${username}`);
});