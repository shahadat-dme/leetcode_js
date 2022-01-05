var partition = function(s) {
    let temp = [];
    let index = 0;
    let result = [];
    
    function backtracking(temp, index) {
        if(index === s.length) result.push([...temp]);
        
        for(let i = index; i < s.length; i++) {
            if(isPalindrome(index, i)) {
                temp.push(s.slice(index, i + 1));
                backtracking(temp, i + 1);
                temp.pop();
            }
        }
    }
    backtracking(temp, index);
    
    function isPalindrome(left, right) {
        while(left < right) {
            if(s[left++] !== s[right--]) return false
        }
        return true;
    }
    return result;
};
/*
const partition = (s) => {
    const result = [];
    dfs(s, 0, result, [], getPalindromeDp(s));
    return result;
  };
  
  const getPalindromeDp = (s) => {
    const dp = Array.from(Array(s.length), () => Array(s.length).fill(false));
  
    // init
    for (let i = 0; i < s.length; i++) {
      dp[i][i] = true;
    }
    for (let i = 0; i < s.length - 1; i++) {
      dp[i][i + 1] = s[i] === s[i + 1];
    }
  
    // compute
    for (let i = s.length - 3; i >= 0; i--) {
      for (let j = i + 2; j < s.length; j++) {
        dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1];
      }
    }
    return dp;
  };
  
  const dfs = (s, i, result, chosen, dp) => {
    if (i === s.length) {
        result.push([...chosen]);
      return;
    }
  
    for (let j = i; j < s.length; j++) {
      if (dp[i][j]) {
        chosen.push(s.substring(i, j + 1));
        dfs(s, j + 1, result, chosen, dp);
        chosen.pop();
      }
    }
  };
  */
console.log(partition("a"))
console.log(partition("aab"))
console.log(partition("madam"))