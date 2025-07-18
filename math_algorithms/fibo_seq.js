// Given a number 'n', find the  first 'n' elements of the Fibonacci sequence
// In maths, the fibonacci sequence is sequence in which each number is the sum of the two preceding ones.
// The first two numbers in the sequence are 0 and 1.

// fibonacci(2) = [0,1]
// fibonacci(3) = [0,1,1]

function fibonacci(n){
    const fib = [0,1];
    for(let i = 2; i <n; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib;
}

console.log(fibonacci(2), "fibo-2")
console.log(fibonacci(3), "fibo-3")
console.log(fibonacci(7), "fibo-7")

// Big-O of this algorithm is O(n) - reason : 1 for loop