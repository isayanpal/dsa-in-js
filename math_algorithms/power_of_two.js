// check whether the integer is a power of 2 or not

function isPowerOfTwo(n){
    if(n < 1){
        return false;
    }
    while (n > 1) {
        if(n%2 !== 0){
            return false;
        }
        n = n/2;
    }
    return true;
}

// Big-O -> O(logn)

console.log(isPowerOfTwoBitWise(8)) // true
console.log(isPowerOfTwoBitWise(5)) // false
console.log(isPowerOfTwoBitWise(32)) // true

function isPowerOfTwoBitWise(n){
    if(n < 1){
        return false;
    }
    return (n & (n-1)) === 0;
}

// Big-O -> O(1)