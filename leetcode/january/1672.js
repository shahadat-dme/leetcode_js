var maximumWealth = function(accounts) {
    let maxWealth = -Infinity;
    
    for(let account of accounts) {
      let accountTotal = 0;
      
      for(let i = 0; i < account.length; i++) {
        accountTotal += account[i];
      }
      
      maxWealth = Math.max(maxWealth, accountTotal);
    }
    
    return maxWealth;
  };