let numArry = [111, 11, 3, 4, 5, 90, 7, 78, 89, 9, 7, 6, 33, 400]

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
console.log("Max Number is :",output)

// find min number of arry 
function minnumber(number){
    let test = number[0]
    for(let i of number){
        if(i < test ){
            test = i 
        }
    }
    return test;
}

let result = minnumber(numArry);
console.log("Min Number is :",result)


function avenumber(number){
    let add = 0;
    for(let num of number){
        add = add + num;
    }
    let result = add / number.length;
    return result.toFixed(2);
}

let aveOutput = avenumber(numArry)
console.log(aveOutput);