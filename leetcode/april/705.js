var MyHashSet = function() {
    this.hashSet={}
};

MyHashSet.prototype.add = function(key) {
    this.hashSet[key]=key
};

MyHashSet.prototype.remove = function(key) {
    delete this.hashSet[key]
};

MyHashSet.prototype.contains = function(key) {
    return key in this.hashSet
};