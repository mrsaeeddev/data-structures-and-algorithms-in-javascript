function memoizedFibonacci() {
    let memoArray = [];
    function fibonacci(n) {
        if (n<2) return n;
        if (memoArray[n]) return memoArray[n];
        memoArray[n] = fibonacci(n-1) + fibonacci(n-2);
        return memoArray[n];
    }
    return fibonacci(n);
}