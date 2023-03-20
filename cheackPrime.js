function isPrimeNumber(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return 'Your Number Is a Not Prime Number';
        }
        return 'Your Number Is a Prime Number';
    }
}

const result = isPrimeNumber(139);
console.log(result);