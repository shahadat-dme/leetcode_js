//1 first way
// function destroyer(arr) {
//     const argsArr = [...arguments].slice(1)
//     const fileterdArr = []
//     for (let i = 0; i <arr.length; i++){
//         if(!argsArr.includes(arr[i])){
//             fileterdArr.push(arr[i])
//         }
//     }
//     return fileterdArr
// }
// console.log(destroyer([1,2,3,1,2,3],2,3))


//2 rd way
// function destroyer(arr) {
//     const argsArr = [...arguments].slice(1)
//     const fileterdArr = []
//     for (const el of arr){
//         if(!argsArr.includes(el)){
//             fileterdArr.push(el)
//         }
//     }
//     return fileterdArr
// }
// console.log(destroyer([1,2,3,1,2,3],2,3))

// 3 rd way
// function destroyer(arr) {
//     const argsArr = [...arguments].slice(1)

//     const fileterdArr = arr.filter(el => !argsArr.includes(el))
//     return fileterdArr
// }
// console.log(destroyer([1,2,3,1,2,3],2,3))


//4rd
// function destroyer(arr) {
//     const argsArr = [...arguments].slice(1)
    
//     return arr.filter(el => !argsArr.includes(el))
// }
// console.log(destroyer([1,2,3,1,2,3],2,3))


//5rd
function destroyer(arr) {    
    return arr.filter(el => ![...arguments].slice(1).includes(el))
}
console.log(destroyer([1,2,3,1,2,3],2,3))