let numArry = [1, 11, 3, 4, 5, 90, 7, 78, 89, 9, 7, 6, 33, 400]

// find max number of array 
function maxnumber(number) {
    let store = number[0];
    for (let num of number) {
        if (num > store) {
            store = num;
        }
    }
    return store;
}

let output = maxnumber(numArry)
console.log(output)
