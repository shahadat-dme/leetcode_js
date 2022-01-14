// const myAtoi=(s,n=(-2)**31,m=2**31-1,r)=>(r=s.match(/^\s*[-+]?\d+/))<n?n:r>m?m:r

var myAtoi = function(s) {
  const min = (-2)**(31), max = 2**31 - 1;

  const result = s.trim().match(/^[-+]?\d+/);
  
  if (result < min) return min
  if (result > max) return max
  return result
};
