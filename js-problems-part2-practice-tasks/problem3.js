    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];

function findAveragePhonePrice(input){
    let total = 0;
    for( let str of input){
        let check = str.price
        total = total + check
    }
    return (total / input.length) 
}

let result = findAveragePhonePrice(phones)
console.log("Average Phone Price is : ",result.toFixed(2))