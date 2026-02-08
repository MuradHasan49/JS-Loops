

let numberArray = [22,4,5,6,8,8,85,4,3,4,5,6,34,5]

function make_avg(arr){
    let total = 0;
    for(let num of arr){
        total = total + num
    }
    return total / arr.length
} 

console.log(make_avg(numberArray).toFixed(2))