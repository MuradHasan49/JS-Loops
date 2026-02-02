// Task 1 

// let testStr = "aakkdkjgiienvieaaaaAfopwfpwmdfwpaaaaaaaaaaaaaaaaaa";

// console.log()
// let total = [];
// for( let i of testStr.toLowerCase()){
//     // console.log(i)
//     if(i === 'a' ){
//         total = total + i
//         // console.log(i)
//     }

// }

// console.log("Total Charecter is :",total.length)



// Task 2


let testStr = "aakkdkjgiienvieaaaaAfopwAAAAAAAAAAAAAAAAAAAAAAAAAAAfpwmdfwpaaaaaaaaaaaaaaaaaa";

console.log()
let total = [];
for( let i of testStr.toUpperCase()){
    // console.log(i)
    if(i === 'A' ){
        total = total + i
        // console.log(i)
    }

}

// console.log("Total Charecter is :",total.length)


// Task 3
// Check whether a string contains all the vowels a, e, i, o, u
let vowelsStr = "i am edit some video of us gov."
// let vowelsStr = "Hymn rhythms fly. My spry nymph, try my gym. Why dry? Cry, sly sky. By thy myth, fly. My shy lynx, cry by my sky."

if(vowelsStr.includes("a") || vowelsStr.includes("e") || vowelsStr.includes("i") || vowelsStr.includes("o") || vowelsStr.includes("u")){
    console.log("Yes Vowels is Here  ")
}else{
    console.log("Sorry no Vowels Here")

}


