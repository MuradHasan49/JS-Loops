
// Task 1 
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

function revArray (input){
    let storeArray = []
    for(let j = colors.length - 1 ; j >= 0 ; j --){
        storeArray.push(colors[j])
    }
    return storeArray;
}

let resultOfArray = revArray(colors)
console.log(resultOfArray)