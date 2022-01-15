var minJumps = function(arr) {
    const lim = arr.length - 1;
    if (lim <= 1) { return lim; }
  
    let sameValues = new Map();
    for (let i = 0; i <= lim; i++) {
      const x = arr[i];
      let list = sameValues.get(x);
      if (!list) {
        list = [i];
        sameValues.set(x, list);
      } else {
        list.push(i);
      }
      arr[i] = list;
    }
    if (!sameValues.size) { return lim; }
  
    let last = [1, ...arr[0].splice(0)];
    arr[0] = undefined;
    let jumps = 0;
    for (;;) {
      jumps++;
      const layer = [];
      for (const i of last) {
        if (i === lim) {
          return jumps;
        }
        const list = arr[i];
        if (list) {
          if (list.length) {
            layer.splice(0, 0, ...list.splice(0));
          }
          layer.push(i - 1);
          layer.push(i + 1);
          arr[i] = undefined;
        }
      }
      last = layer;
    }
  };