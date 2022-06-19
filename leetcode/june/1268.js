var suggestedProducts = function(products, searchWord) {
    products.sort()
    let list = []
    let prefix = ""
    for(let i=0; i<searchWord.length; i++){
        let sublist = []
        let count = 0
        prefix += searchWord[i]
        for(let prod of products){
            if(prod.length >= prefix.length && prod.slice(0,i+1) === prefix && count < 3){
                sublist.push(prod)
                count++
            }
        }
        list.push(sublist)
    }
    return list
};

const searchValue = suggestedProducts(["mobile","mouse","moneypot","monitor","mousepad"],"mouse")
console.log(searchValue);