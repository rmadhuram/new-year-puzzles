function powLast4Digits(a, b) {
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
    let last4 = powLast4Digits(year, year);
    console.log(a, year, last4);
    if (last4 > max) {
        max = last4;
        maxYear = year; 
    }
}
console.log(maxYear);