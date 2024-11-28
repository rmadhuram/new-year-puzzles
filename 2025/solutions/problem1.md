# Problem 1

![Problem 1](../problems/1.png)

# Solution

When a is multiplied by b, if we want to find the last 4 digits of the result, we can just multiply the last 4 digits of a and b together.


We can implement this in code by using the modulo operator `%`.

<pre>
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
</pre>

If we run the above code, we get 1024 as the answer. 1024^1024 has last 4 digits of 9776, which is the largest 4 digits of all square years up to 2025.