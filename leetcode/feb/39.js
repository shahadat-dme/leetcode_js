/*
This is a question of backtracking and recursion and we got to this conclusion by following points
1.The question states we can use same number multiple times so we can think that
it will take use of recursion
2.We need to find all possible unique combination of numbers that will result to our target to this should make us think it will use backtracking too

Solution approach
1.We will take use of a backtracking recursive function which will take input as index, target and a temperory data structure(in this question stack will be suitable).
2.We already initialised the index because we wanna/may use it many times so intialising index outside the loop will be helpful
3.Target is our target that we want to achieve
4.Temperory data structure will store our combinations i.e numbers that may result to our target
5.The loop will start with index and end on our last index as obvious
6.We will add the current number to our temp DS and substract it from target
7.If our target is still not equal to zero i.e we still have some target to achieve
8.So we will keep on calling backtracking function and substraction the number from target to see if its zero or not
9.If it becomes zero then we achieved our target and we will push the temp DS values in the result as temp DS was storing the values which together resulted to our target
10.If we reached somewhere lower than zero that means our sum became greater than our target so we cannot take that number that made our sum greater than target
11.So we will return from their and because we are in a for loop after returning we will add next number of "candidates array" to our temperory datastructure and start backtracking recursion again
12.Make sure to remove the element from our temp DS because of which our sum became greater than our target

In general we can say this question is alll about selecting and not-selecting an element . We select an element if we haven't reached our target
We remove element from temp DS or don't select an element if we go beyond our target
*/
var combinationSum = function(candidates, target) {
    let index = 0
    let tempDataStruct = []
    let result = []

    function backtracking(index, target, tempDataStruct) {
        if(target === 0) {
            result.push([...tempDataStruct])
            return
        }
    
        if(target < 0) return;
    
        for(let i=index; i<candidates.length; i++) {
            tempDataStruct.push(candidates[i])
            backtracking(i, target-candidates[i], tempDataStruct)
            tempDataStruct.pop()
        }
    }
    backtracking(index, target, tempDataStruct)
    return result;
};