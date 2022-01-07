var Solution = function(head) {
    this.results = []; 
    let current = head;  
    
    while(current !== null) {
        this.results.push(current)
        current = current.next;
    }
    this.length = this.results.length; 
};

Solution.prototype.getRandom = function() {
//Math.random() will generate a random number b/w 0 & 1.
//then multiply it with the array size, as i have all the value in the list, i know the size of the list
//take only the integer part which is a random index.
//return the element at that random index.
return this.results[Math.floor(Math.random() * this.length)].val
};