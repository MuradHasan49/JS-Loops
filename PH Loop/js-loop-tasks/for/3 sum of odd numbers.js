

/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

/*programming hero*/

let sumOddNumber = 129 ;
let sumOfOdd = 0;

for( let i = 91; i <= sumOddNumber ; i++){
    // console.log(i)
    if( i % 2 === 1){
        sumOfOdd = sumOfOdd + i;
    }
}
console.log(sumOfOdd)


let num = 100;
let newSum = 0 ;
for( let j = 51; j <= num ; j++){
    if( j % 2 === 0 ){
        newSum = newSum + j;
    }
    
}
console.log(newSum)