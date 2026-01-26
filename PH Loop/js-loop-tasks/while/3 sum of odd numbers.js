

/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/


// subtask 1 ans:

let oddNumber = 81;
let oddSum = 0;

while (oddNumber <= 131) {
    if (oddNumber % 2 == 1) {
        oddSum = oddSum + oddNumber
    }
    
    oddNumber++
    
}
console.log("oddNumber sum is :", oddSum)

// subtask 2 ans:

let evenNumer = 206;
let evenNumerSum = 0;

while (evenNumer <= 311) {
    if (evenNumer % 2 == 0) {
        evenNumerSum = evenNumerSum + evenNumer;
        
    }
    evenNumer++
}
console.log("The even sum numbers is :", evenNumerSum)