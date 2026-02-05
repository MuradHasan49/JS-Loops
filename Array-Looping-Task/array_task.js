
// Task 1 
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

function revArray (input){
    let storeArray = []
    for(let j = input.length - 1 ; j >= 0 ; j --){
        storeArray.push(colors[j])
    }
    return storeArray;
}

let resultOfArray = revArray(colors)
console.log(resultOfArray)


// Task 2 

const numbers = [12, 98, 5, 41, 23, 78, 46, 88];

function evenNumber(input){
    let newEvenAray = []
    for(let n of input ){
        if(n % 2 === 0){
            newEvenAray.push(n)
        }
    }
    return newEvenAray
}


let evenResult = evenNumber(numbers);
console.log(evenResult);