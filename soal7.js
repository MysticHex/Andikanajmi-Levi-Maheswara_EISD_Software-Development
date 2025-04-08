function decrypt(str) {
    return str.replace(/[a-zA-Z]/g, function (char) {
        let code = char.charCodeAt(0);

        if (char >= 'a' && char <= 'z') {
            code = ((code - 'a'.charCodeAt(0) + 5) % 26) + 'a'.charCodeAt(0);
        } else if (char >= 'A' && char <= 'Z') {
            code = ((code - 'A'.charCodeAt(0) + 5) % 26) + 'A'.charCodeAt(0);
        }

        return String.fromCharCode(code);
    });
}

let string1 = "xfqfr bfmdz";
let string2 = "gjxtp lzj rfz ifkyfw jxi snm";
let string3 = "gwt, gjxtp qz rfz rfpfs in bfwlty lfp?";
let string4 = "fpz xfdfsl pfrz, rfz lfp ofin ufhfwpz";
let string5 = "dfsl pnwnr xynhpjw otrtp pz pnhp ifwn lwzu";

console.log(decrypt(string1));
console.log(decrypt(string2));
console.log(decrypt(string3));
console.log(decrypt(string4));
console.log(decrypt(string5));