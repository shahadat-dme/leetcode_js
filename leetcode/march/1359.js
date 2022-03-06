var countOrders = function(n) {
    var res = 1, modulo = 1000000007;
    for(let i=1; i<=n; i++){
        res = res * i * (2*i - 1) % modulo;
    }
    return res;
};


// var countOrders = function(n, res = 1) {
//     return n ? countOrders(n - 1, (res * (n * 2 - 1) * n) % (10 ** 9 + 7)) : res;
// };