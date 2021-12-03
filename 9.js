var isPalindrome = function(x) {
    if (Math.sign(x) === -1) {
        return false
    }
    if (x < 10) {
        return true
    }
    
    let numStore = []
    let num = x
    let result = 0
    let count = 0
	
    while (num > 1){
        numStore[count] = num % 10 | 0
        num /= 10 
        count++
    }
    
    for (let i = 0; i < numStore.length; i++){
        result += numStore[i] * 10 ** (numStore.length - i - 1)
    }
    return result === x
};

console.log(isPalindrome([-121]))