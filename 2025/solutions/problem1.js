function powLast2Digits(a, b) {
    let prod = 1;
    for (let i = 0; i < b; i++) {
        prod = (prod * a) % 10000;
    }
    return prod;
}

let max = 0;
let maxYear = 0
for (let a = 1; a <= 45; a++) {
    let year = a * a;
    let last2 = powLast2Digits(year, year);
    console.log(a, year, last2);
    if (last2 > max) {
        max = last2;
        maxYear = year; 
    }
}
console.log(maxYear);