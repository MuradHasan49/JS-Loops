
let number = [2,3,4,5,6,7,44,4,2,12,43];

function evenSum(arry){
    let nArr = 0;
    for(let i of arry){
        if( i % 2 === 0){
            nArr = nArr + i;
            // console.log(i)
        }
    }
    return nArr
}

let a = evenSum(number)
console.log(a)