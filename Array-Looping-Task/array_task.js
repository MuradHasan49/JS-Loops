
// Task 1 
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

function revArray(input) {
    let storeArray = []
    for (let j = input.length - 1; j >= 0; j--) {
        storeArray.push(colors[j])
    }
    return storeArray;
}

let resultOfArray = revArray(colors)
console.log(resultOfArray)


// Task 2 

const numbers = [12, 98, 5, 41, 23, 78, 46, 88];

function evenNumber(input) {
    let newEvenAray = []
    for (let n of input) {
        if (n % 2 === 0) {
            newEvenAray.push(n)
        }
    }
    return newEvenAray
}


let evenResult = evenNumber(numbers);
console.log(evenResult);


// Task 3

var nameArray = ['Tom', 'Tim', 'Tin', 'Tik']

function concatArry(input) {
    let conRe = " ";
    for (let i of input) {
        conRe = conRe + i
    }
    let a = conRe.split(" ");

    return a.join(" ")
}
let concatResult = concatArry(nameArray)
console.log(concatResult)


// Task 4 

const statement = 'I am a hard working person'

function revWord(input) {
    let word = input.split(" ")

    let finalResultis = [];
    for (let i = word.length - 1; i >= 0; i--) {
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

const inArray = [1, 2, 3]
let newArray22 = inArray.slice()
newArray22[0] = 99;
console.log("Orginal Array is:", inArray, "New Array is:", newArray22)

// Task 6

const obj = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 },

  { name: "Harry", marks: 78 },
  { name: "Michael", marks: 82 },
  { name: "David", marks: 69 },
  { name: "Robert", marks: 91 },
  { name: "James", marks: 74 },
  { name: "Daniel", marks: 88 },
  { name: "William", marks: 65 },
  { name: "Joseph", marks: 93 },
  { name: "Thomas", marks: 80 },
  { name: "Charles", marks: 76 },

  { name: "Christopher", marks: 84 },
  { name: "Matthew", marks: 72 },
  { name: "Anthony", marks: 90 },
  { name: "Mark", marks: 68 },
  { name: "Paul", marks: 87 },
  { name: "Steven", marks: 79 },
  { name: "Andrew", marks: 92 },
  { name: "Joshua", marks: 66 },
  { name: "Kevin", marks: 81 },
  { name: "Brian", marks: 75 },

  { name: "George", marks: 89 },
  { name: "Edward", marks: 73 },
  { name: "Jason", marks: 85 },
  { name: "Ryan", marks: 70 },
  { name: "Justin", marks: 94 },
  { name: "Aaron", marks: 77 },
  { name: "Henry", marks: 83 },
  { name: "Samuel", marks: 67 },
  { name: "Nicholas", marks: 90 },
  { name: "Adam", marks: 71 }
];


function showNameAndMark(obj) {
    let r = []
    for(let ob of obj){
        let rusult = ob.name +" Number is : " +ob.marks 
        r.push(rusult)
    }
    return r.join("\n");
}

console.log("Result is :\n",showNameAndMark(obj))

// Task 7

// [
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ]

// to

// [
//   [1, 2],
//   [99, 4],
//   [5, 6]
// ]

const nA = [
    [1,2],
    [3,4],
    [5,6],
]

let newA = structuredClone(nA)
newA[1][0] = 99;

console.log("Orginal Array is :",nA,"\nUpdated New Array is :",newA)
