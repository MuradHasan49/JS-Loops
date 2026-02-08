const heights2 = [167, 190, 120, 165, 137];

function longNumber(number) {
    let com = number[0]
    for (let num of number) {
        // console.log(num)
        if (num > com) {
            com = num
        }
    }
    return com
}

let result = longNumber(heights2)
console.log(result)