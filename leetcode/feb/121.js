var maxProfit = function(prices) {
    // var len = prices.length;
    var curr = prices[0];
    var res = 0;
    
    for (var i=0; i< prices.length; i++){
        if (prices[i] > curr && (prices[i]-curr > res) ){
        res = prices[i] - curr;
        }
        if (prices[i] < curr){
        curr = prices[i];
        }
    }
    
    return res;
};