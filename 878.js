var nthMagicalNumber = function(n, a, b) {
    if(b > a){
        a,b = b,a
    }
    
    var L = ((a+b)/gcd(a,b))-1;
    var M = Math.floor(n/L);
    var N = n + M;
    
    
    var X = Math.ceil(N*b/(a+b));
    var Y = Math.ceil(N-(N*b/(a+b)));
    
    var mod = (10**9)+7;
    
    if(X*a <= Y*b)return (X*a)%mod;
    else return (Y*b)%mod;
};

var gcd = function(x,y){
    while(y!=0){
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
};