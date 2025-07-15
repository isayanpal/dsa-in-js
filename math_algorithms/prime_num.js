// check whether the number is prime or not


function isPrime(n){
    if(n<2){
        return false;
    }
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n%i === 0){
            return false;
        }
    }
    return true;
}
// Big-O -> O(sqrt(n))

console.log(isPrime(4), "prime-4")
console.log(isPrime(3), "prime-3")
console.log(isPrime(7), "prime-7")