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
    const curr = s[i];
    const next = s[i+1]
     
   if (hints[curr] < hints[next]) {
       const num = hints[next] - hints[curr];
       converted += num;
       i++;
    } else {
        converted += hints[curr];
    }
}
return converted;
}

console.log(romanToInt("III"))