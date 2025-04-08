function analyzeNames(names) {
    let nameCounts = {};

    // Count occurrences of each name
    names.forEach(name => {
        nameCounts[name] = (nameCounts[name] || 0) + 1;
    });

    // Find the highest frequency
    let maxCount = Math.max(...Object.values(nameCounts));

    // Find all names with the highest frequency
    let mostCommonNames = Object.keys(nameCounts).filter(name => nameCounts[name] === maxCount);

    // Check if all names have the same frequency
    let allNamesEqual = mostCommonNames.length === names.length;

    if (allNamesEqual) {
        return "Semuanya anak baik";
    } else {
        return mostCommonNames.map(name => name + " nakal").join(", ");
    }
}

// Example usage with your three arrays
let array1 = ["Bagas", "Dimas", "Bagas", "Bagas", "Indra", "Gilang", "Gilang", "Hana", "Fajar", "Fajar"];
let array2 = ["Bagas", "Dimas", "Fajar", "Bagas", "Indra", "Gilang", "Gilang", "Bagas", "Fajar", "Fajar"];
let array3 = ["Aisyah", "Bagas", "Dewi", "Dimas", "Eka", "Fajar", "Gilang", "Hana", "Indra", "Jihan"];

// Analyze and display results for each array
console.log("Array 1:", analyzeNames(array1));
console.log("Array 2:", analyzeNames(array2));
console.log("Array 3:", analyzeNames(array3));