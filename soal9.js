function analyzeNames(names) {
    let nameCounts = {};

    names.forEach(name => {
        nameCounts[name] = (nameCounts[name] || 0) + 1;
    });

    let maxCount = Math.max(...Object.values(nameCounts));

    let mostCommonNames = Object.keys(nameCounts).filter(name => nameCounts[name] === maxCount);

    let allNamesEqual = mostCommonNames.length === names.length;

    if (allNamesEqual) {
        return "Semuanya anak baik";
    } else {
        return mostCommonNames.map(name => name + " nakal").join(", ");
    }
}

let array1 = ["Bagas", "Dimas", "Bagas", "Bagas", "Indra", "Gilang", "Gilang", "Hana", "Fajar", "Fajar"];
let array2 = ["Bagas", "Dimas", "Fajar", "Bagas", "Indra", "Gilang", "Gilang", "Bagas", "Fajar", "Fajar"];
let array3 = ["Aisyah", "Bagas", "Dewi", "Dimas", "Eka", "Fajar", "Gilang", "Hana", "Indra", "Jihan"];

console.log("Array 1:", analyzeNames(array1));
console.log("Array 2:", analyzeNames(array2));
console.log("Array 3:", analyzeNames(array3));