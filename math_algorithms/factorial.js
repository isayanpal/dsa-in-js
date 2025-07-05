// Given an integer 'n', find the factorial of that integer
// In maths, the factorial of a non- negative integer 'n', denoted n! , is the product of all positive integers less than or equal to 'n'.
// Factorial of zero is 1.

// factorial(4) = 4*3*2*1 = 24

function factorial(n){
    let result = 1;
    for(i = 2; i <= n; i++){
        result = result*i;
    }
    return result;
}

console.log(factorial(2), "fact-2")
console.log(factorial(3), "fact-3")
console.log(factorial(7), "fact-7")

// Big-O is O(n) - reason is 1 loop 