/**
 * if buy 1 - 100 the price = 100
 *        101 - 200 = 80
 *        201 - More = 50        
 */

// normal discount Calculation

function discount(input){
    const first_100_pirce = 100
    const second_100_pirce = 80
    const third_100_pirce = 50

    if (input <= 100){
        let a = input * first_100_pirce;
        return a 
    }
    else if(input <= 200 ){
        let b = input * second_100_pirce
        return b
    }
    else{
        let c = input * third_100_pirce
        return c
    }
}

const result = discount(201)
console.log(result)



//Layered Calculation