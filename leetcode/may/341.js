class NestedIterator {
    constructor(nestedList) {
      this.gen = this.listGenerator(nestedList);
      this.nextVal = this.gen.next();
    }
  
    hasNext() {
      return !this.nextVal.done;
    }
  
    next() {
      const val = this.nextVal.value;
      this.nextVal = this.gen.next();
      return val;
    }
  
    *listGenerator(list) {
      for (const el of list) {
        if (el.isInteger()) yield el.getInteger();
        else yield* this.listGenerator(el.getList());
      }
    }
  }