var minimumAbsDifference = function(arr) {
    arr.sort((x,y)=>x-y)
    var sub=[];
    var res=[];
    var minimum=arr[1]-arr[0];
    for(var i=1; i<arr.length; i++){
        if(minimum>(arr[i]-arr[i-1])) minimum=arr[i]-arr[i-1]
        sub.push(arr[i]-arr[i-1])
    }
    
    for(i=0; i<sub.length; i++){
        if(sub[i]===minimum) res.push([arr[i],arr[i+1]])
    }
    return res
};

console.log(minimumAbsDifference([4,2,1,3]))
console.log(minimumAbsDifference([1,3,6,10,15]))
console.log(minimumAbsDifference([3,8,-10,23,19,-4,-14,27]))