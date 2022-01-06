const carPooling = (trips, capacity) => {
    let onOffLog = []
    for(const [passengers, start, end] of trips)
        onOffLog.push([start, passengers], [end, -passengers])
    onOffLog.sort((a,b) => a[0] - b[0] || a[1] - b[1])
    let passengerCount = 0
    for(const [, people] of onOffLog){
        passengerCount += people
        if(passengerCount > capacity)
            return false
    }
    return true
};
/*
var carPooling = function(trips, capacity) {
    const obj = {};
    for(let [num, start, end] of trips) {
        while(start < end) {
            obj[start] = obj[start] + num || num;
            if(obj[start] > capacity) return false;
            start++;
        }
    }
    return true;
};
*/
/*
function carPooling(trips, capacity) {
    // Create an array that will act as a calendar, storing
    // how many people will be in the car at any individual time.
    let schedule = new Uint16Array(1000).fill(0)
    
    // Loop through the trips to populate our calendar
    for (const trip of trips) {
        
        const people = trip[0]  // Number of people to join the carpool
        const start = trip[1]   // Index where they get on
        const end = trip[2]     // Index where they get off
        
        // Increment through the time-slice, adding the number of people 
        // for each specific time-window to our calendar
        for (let i = start; i < end; i++) {
            
            // Add the number of people to this time window
            schedule[i] += people
            
            // If will be more people in the car than allowed, return false
            if (schedule[i] > capacity) {
                return false
            }
        }
    }
    // If we got this far, the schedule has been validated. Return true.
    return true
}
*/

/*
var carPooling = function(trips, capacity) {
    // as per requirement there will be max 1000 trips
    let stops = new Array(1001);
	
    // let's fill each stop as 0
    stops.fill(0);
    
    // fill each stop with number of passengers we have in the car remaining
    for(let i=0; i<trips.length; i++) {
        const [num_passengers, start_location, end_location] = trips[i];
        //when we start a trip we load passengers in the car
        stops[start_location] += num_passengers;
        // when we arrive, we remove passengers from the car
        stops[end_location] -= num_passengers;
    }
    
    // compare all passengers in every stop to the capacity
    // can alse use reduce to calculate 
    // total sum of passenger in all stops
    for (let i = 0; capacity >= 0 && i < 1001; i++) {
        capacity -= stops[i];
    }
    
    // if we still have extra capacity left, we met the requirements
    return capacity >= 0;
};
*/