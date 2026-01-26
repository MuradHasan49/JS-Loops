/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/

// Subtask 1 Ans

let subNumber1 = 78;
while (subNumber1 <= 98) {
    // console.log(subNumber1)
    if (subNumber1 % 2 == 1) {
        console.log("The odd numbers :", subNumber1)
    }
    subNumber1++
}

console.log("")
console.log("")
console.log("")

// Subtask 2 Ans

let subNumber2 = 61;
while (subNumber2 <= 100) {
    // console.log(subNumber2)
    if (subNumber2 % 2 == 0) {
        console.log("The even numbers :", subNumber2)
    }
    subNumber2++
}