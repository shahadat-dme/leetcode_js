var UndergroundSystem = function() {
    this.time = new Map();
    this.cache = new Map();
};

UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.time.set(id,[stationName,t]);
};

UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    let data = this.time.get(id);
    this.time.delete(id);
    
    let stationPair = data[0]+'-'+stationName;
    if(this.cache.has(stationPair)){
        this.cache.get(stationPair).push(t-data[1]);
    } else this.cache.set(stationPair,[t-data[1]]);
    
};

UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    let avg=0;
    let pair = startStation+'-'+endStation;
    for(let time of this.cache.get(pair)){
        avg+=time;
    }
    
    return avg/this.cache.get(pair).length;
};