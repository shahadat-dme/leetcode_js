var romanToInt = function(s) {
    const hints = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }

let converted = 0;

for (let i = 0; i < s.length; i++) {
    const current = s[i];
    const next = s[i+1]
     
   if (hints[current] < hints[next]) {
       const num = hints[next] - hints[current];
       converted += num;
       i++;
    } else {
        converted += hints[current];
    }
}
return converted;
}

console.log(romanToInt("III"))