/**
 * if buy 1 - 100 the price = 100
 *        101 - 200 = 80
 *        201 - More = 50        
 */

// normal discount Calculation

function discount(input) {
    const first_100_pirce = 100
    const second_100_pirce = 80
    const third_100_pirce = 50

    if (input <= 100) {
        let a = input * first_100_pirce;
        return a
    }
    else if (input <= 200) {
        let b = input * second_100_pirce
        return b
    }
    else {
        let c = input * third_100_pirce
        return c
    }
}

const result = discount(201)
// console.log(result)



//Layered Calculation

function layeredCal(inputNumber) {
    const first_100_price = 100
    const second_100_pirce = 80
    const third_100_pirce = 50

    if (inputNumber <= 100) {
        return inputNumber * first_100_price
    }
    else if (inputNumber <= 200) {
        let preprice = 100 * first_100_price;
        let rem = inputNumber - 100
        let result = rem * second_100_pirce;

        return preprice + result
    }
    else {
        let preprice = 100 * first_100_price
        let preprice2 = 100 * second_100_pirce
        let rem = inputNumber - 200
        let final = rem * third_100_pirce

        let result = preprice + preprice2 + final
        return result
    }

}

let layeredResult = layeredCal(102)
console.log("Discount Price is : ", layeredResult ,"Taka")