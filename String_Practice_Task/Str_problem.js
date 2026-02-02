// Task 1 

let testStr = "aakkdkjgiienvieaaaaAfopwfpwmdfwpaaaaaaaaaaaaaaaaaa";

console.log()
let total = [];
for( let i of testStr.toLowerCase()){
    // console.log(i)
    if(i === 'a' ){
        total = total + i
        // console.log(i)
    }

}

console.log("Total Charecter is :",total.length)