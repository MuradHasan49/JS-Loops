let dam = [
    { neme: "poco", price: 18000, color: "black" },
    { neme: "xiomi", price: 22000, color: "black" },
    { neme: "iphone", price: 150000, color: "black" },
    { neme: "redmi", price: 19000, color: "black" },
    { neme: "sumsung", price: 50000, color: "black" },
    { neme: "oppo", price: 10000, color: "black" },
]

function max_price(price) {
    let store = price[0]
    for (const num of price) {
        if (num.price > store.price) {
            store = num
        }
    }
    return store
}

const max = max_price(dam)
console.log("Max Phone Price is :",max)



function min_phone(price) {
    let comp = price[0]
    for (const j of price) {
        if(j.price < comp.price){
            comp = j 
        }
    }
    return comp;
}

const minoutput = min_phone(dam)
console.log("Min Phone Price is :",minoutput)