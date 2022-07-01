const maximumUnits = (boxTypes, truckSize) => {
    let ret = 0;
    boxTypes.sort((a, b) => b[1] - a[1]);
    for (let idx = 0; ; ) {
      if (idx >= boxTypes.length) break;
      const [count, unit] = boxTypes[idx];
      if (count === 0) { ++idx; continue; }
      if (truckSize <= count) { ret += truckSize * unit; break; }
      truckSize -= count;
      ret += count * unit;
      ++idx;
    }
    return ret;
  };