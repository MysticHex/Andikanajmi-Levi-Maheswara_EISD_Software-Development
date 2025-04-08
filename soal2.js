function cekPalindrom(input) {
    const teksAwal = input.toLowerCase().replace(/\s/g, '');
    
    const Palindrom = teksAwal.split('').reverse().join('');
    
    if (teksAwal === Palindrom) {
        return "eureeka!";
    } else {
        return "suka blyat";
    }
}

console.log(cekPalindrom("Kasur Rusak"));
console.log(cekPalindrom("Malam"));
console.log(cekPalindrom("Hello World"));
console.log(cekPalindrom("12321"));