function fibonacci(n) {
    if (n == 0) {
        return [0];
    }
    if (n == 1) {
        return [0, 1];
    }
    else {
        const fibo = fibonacci(n - 1);
        const nextElemant = fibo[n - 1] + fibo[n - 2];
        fibo.push(nextElemant);
        return fibo;
    }
}

const result = fibonacci(12);
console.log(result);
