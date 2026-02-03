const arry = [222, 1, 3, 45, 6, 6, 7, 54, 3, 57, 57, 5, 87, 44, 88, 99, 34, 8, 2, 200, 600, 22, 6, 44];

function evenAve(number) {
    let evenSum = 0;
    let evenLength = [];
    let removeDuplicate = [];
    for (let num of number) {
        if (num % 2 === 0 && removeDuplicate.includes(num) === false) {
            evenSum = evenSum + num;
            evenLength.push(num)
            removeDuplicate.push(num)
        }
    }

    let result = evenSum / evenLength.length;
    return result

}

let output = evenAve(arry)
console.log("Even Number Average is :", output.toFixed(1));


