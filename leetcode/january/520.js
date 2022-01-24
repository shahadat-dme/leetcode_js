var detectCapitalUse = (word) => {
    if(word === word.toLowerCase()) {
        return true
    } 
    if(word === word.toUpperCase()) {
        return true
    }
    if(word[0] === word[0].toUpperCase() && word.slice(1) === word.slice(1).toLowerCase()) {
        return true
    }
    return false
};

// var detectCapitalUse = (word) => {
//     return word === word.toUpperCase() || word === word[0] + word.substr(1).toLowerCase();
// };
console.log(detectCapitalUse("USA"))
console.log(detectCapitalUse("UsaD"))