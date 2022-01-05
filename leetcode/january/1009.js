// const bitwiseComplement = n => (1 << (Math.floor(Math.log2(n || 1)) + 1)) - 1 - n;

// const bitwiseComplement = (N) => parseInt([...N.toString(2)].map((b) => b ^ 1).join``, 2);

var bitwiseComplement = function(n) {
    let bn = n.toString(2);
    bn = bn.split("").map(x => {
        return (x == 1) ? 0 : 1;
    }).join("");
    return parseInt(bn, 2);
};

console.log(bitwiseComplement(5))