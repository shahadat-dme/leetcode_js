// const minPartitions = (n) => Math.max(...n.split(''));


const minPartitions = (n) => {
    let min = 0;
    for (const char of n) {
        char > min && (min = +char);
    }
    return min;
};


// minPartitions=_.max
/*
Explanation:

As noted in various other solutions, all we need to do is find the largest digit.
_ is the lodash library, which is automatically included in scope.
The lodash max function works on any iterable, including strings.
Characters will be compared using their ASCII values, so the ordering is correct, and the largest digit will be returned (as a string).
Leetcode's checker automatically casts return values to the expected type, so the returned string will be parsed as an integer, and judged correct.

I think this is the shortest Leetcode solution I have ever seen!
*/