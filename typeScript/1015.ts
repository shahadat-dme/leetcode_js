function smallestRepunitDivByK(K: number): number {
    if(K === 1) return 1;
    if(K % 2 === 0 || K % 5 === 0) return -1;
    let N: number = 1;
    for(let i: number = 1; i <= K; i++) {
        if(N % K === 0) return i;
        N = K + ((N * 10 +1) % K);
    }
    return -1;
}