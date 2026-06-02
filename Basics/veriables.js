let username = "Sifat";
console.log("Initial Username:", username);

username = "Sifat_Dev";
console.log("Updated Username:", username);

const birthYear = 2000;
console.log("Birth Year:", birthYear);

var age = 25;
console.log("Initial Age (var):", age);
age = 26;
console.log("Updated Age (var):", age);

var score = 10;
var score = 20;
console.log("Score (var re-declared):", score);

if (true) {
    let blockScopedLet = "I am inside the block";
    const blockScopedConst = "Me too";
    var functionScopedVar = "I can escape the block!";
    console.log("Inside block - let:", blockScopedLet);
}

console.log("Outside block - var:", functionScopedVar);

const userProfile = {
    name: "Sifat",
    role: "Developer"
};

userProfile.role = "Senior Developer";
console.log("Updated User Profile Role:", userProfile.role);

const dynamicArray = [1, 2, 3];
dynamicArray.push(4);
console.log("Dynamic Array:", dynamicArray);