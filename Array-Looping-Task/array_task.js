
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


// Task 3

var nameArray = ['Tom', 'Tim', 'Tin', 'Tik']

function concatArry(input){
    let conRe = " ";
    for(let i of input){
        conRe = conRe + i 
    }
    let a = conRe.split(" ");

    return a.join(" ")
}
let concatResult = concatArry(nameArray)
console.log(concatResult)


// Task 4 

const statement = 'I am a hard working person'

function revWord(input){
    let word = input.split(" ")
    
    let finalResultis = [];
    for( let i = word.length - 1; i >= 0 ; i--){
        finalResultis.push((word[i]))
    }
    return finalResultis.join(" ")
}

let revWordResult = revWord(statement);
console.log(revWordResult)


// Task 5

// Input: [1, 2, 3]

// Expected Output:

// Original: [1, 2, 3] Copy: [99, 2, 3]

const inArray = [1,2,3]
let newArray22 = inArray.slice()
 newArray22[0] = 99;
console.log("Orginal Array is:",inArray , "New Array is:" ,newArray22)

